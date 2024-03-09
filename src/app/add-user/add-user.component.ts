import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BookService } from '../books/bookServices/book.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userFormModel = this.fb.group({
    name: ['',[Validators.required,Validators.pattern('^[a-zA-Z ]+')]],
    email: ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')]],
    mobno:['',[Validators.required,Validators.pattern('^[6789]{1}[0-9]{9}$')]]
   
  })

  // class
  constructor(private fb: FormBuilder,private bs:BookService,private toast:ToastService) {

  }

  
  ngOnInit(): void {
   
  }
  
  add(){
    var path=this.userFormModel.value
    var name=path.name
    var email=path.email
    var mobno=path.mobno
    

    if(this.userFormModel.valid){
     
     this.bs.addUser({id:"",name,email,mobno}).subscribe((data:any)=>{
      console.log(data);
      // alert(`${data.name} details added`)
      this.toast.showSuccess(`${data.name} details added`)

      // reset the form
      this.userFormModel.reset()
     })

    }
    else{
      alert('invalid form')
    }
    
    
  }

}
