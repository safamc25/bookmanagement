import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../bookServices/book.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  id:any=""
  bookData:any={}
  fileData:any=""

 
  constructor(private ar:ActivatedRoute,private bs:BookService,private route:Router,private toast:ToastService){}
  images:any="https://i.postimg.cc/k5ggmHpF/badd.jpg"

  editClicked:boolean=false

  
  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      this.id=data.id
      // console.log(this.id);
      

      // api
      this.bs.getbookData(this.id).subscribe((response:any)=>{
        this.bookData=response
        // console.log(this.userData);
        if(this.bookData.images){
          this.images=this.bookData.images
        }
        
      })
    })

    
   
  }

  editClick(){
    this.editClicked=true
  }

  updateData(){
    this.bs.Updatebook(this.id,this.bookData).subscribe((res:any)=>{
      console.log(res);

      this.toast.showSuccess('Updated Succesfully')
      
    
     
      this.route.navigateByUrl("/books")
      this.getBook()

      


       
     
      

    })
  }
  getBook() {
    throw new Error('Method not implemented.');
  }
  getFile(event:any){
    let file=event.target.files[0]

    // url conversion
    let fr=new FileReader()
    
    

    // convert
    fr.readAsDataURL(file)
   
    

    // store the converted url (onload)
    fr.onload=(event:any)=>{
      // console.log(event.target.result);
      this.images=event.target.result
      this.bookData.images=this.images
      // console.log(this.images);
      
    }
}
}
