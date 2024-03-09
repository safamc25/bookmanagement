import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BookService } from '../bookServices/book.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
 
  images:any=""

  bookFormModel = this.fb.group({
    bname: ['',[Validators.required]],
    aname: ['',[Validators.required]],
    description:['',[Validators.required]],
    publisher:['',[Validators.required]],
    pubdate:['',[Validators.required]],
    pages:['',[Validators.required]],
    price:['',[Validators.required]],
    images:['',[Validators.required]]
   
   
  })
  
  ratings?: number[];
  reviews?: string[];

  // class
  constructor(private fb: FormBuilder,private bs:BookService,private toast:ToastService) {

  }
 

  
  ngOnInit(): void {
   
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
      console.log(this.images);
      
    }

        
}
  

  
  add(){
    var path=this.bookFormModel.value
    var bname=path.bname
    var aname=path.aname
    var description=path.description
    var publisher=path.publisher
    var pubdate=path.pubdate
    var pages=path.pages
    var price=path.price
    var images=this.images
    
   
    

    if(this.bookFormModel.valid){
      // console.log(name);
      // console.log(email);
      // console.log(status);
     this.bs.addBook({id:"",bookname:bname,authorname:aname,description:description,publisher:publisher,publishingdate:pubdate,pages:pages,price:price,images:images}).subscribe((data:any)=>{
      console.log(data);
      // alert(`${data.bname} details added`)
      this.toast.showSuccess(`${data.bookname} details added`)

      // reset the form
      this.bookFormModel.reset()
     })

    }
    else{
      this.toast.showError('invalid form')
    }
    
    
  }

 

}
