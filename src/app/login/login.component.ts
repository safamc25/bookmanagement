import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
 

    email:any=""
    pswd:any=""
  
    //reactive model form for login form
    LoginFormModel = this.fb.group({
      email: ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')]],
      pswd: ['',[Validators.required,Validators.pattern('^[a-z0-9]+')]]
    })
  
  
    // class
    constructor(private fb: FormBuilder,private as:AdminService,private route:Router) {
  
    }
  
    ngOnInit(): void {
  
    }
  
    login(){
      var path=this.LoginFormModel.value
      var email=path.email
      var pswd=path.pswd
      this.email=email
  
      if(this.LoginFormModel.valid){
        // console.log(email);
        // console.log(pswd);
        // alert('valid form')
  
        this.as.loginApi().subscribe((data:any)=>{
          var adminPsw=data[0].password
          var adminEmail=data[0].email
          console.log(adminPsw);
          console.log(adminEmail);
  
          if(email==adminEmail){
            if(pswd==adminPsw){
  
              // admin@gmail.com  retreive amdin
  
              var indexE=this.email.indexOf('@')
              localStorage.setItem("userName",this.email.slice(0,indexE));
              
  
  
              // alert("Login successsful")
            this.route.navigateByUrl("books")
            }
            else{
              alert("incorrect password for admin")
            }
            
          }
          else{
            // alert("incorrect email for admin")
          }
          
          
        })

        
        this.as.userApi().subscribe((data:any)=>{
          for (let i = 0; i < data.length; i++) {
            var userMob = data[i].mobno;
            var userEmail = data[i].email;
        
            if (email == userEmail) {
              if (pswd == userMob) {
  
             
  
              var indexE=this.email.indexOf('@')
              localStorage.setItem("userName",this.email.slice(0,indexE));
              
  
  
              // alert("Login successsful")
            this.route.navigateByUrl("books/view-books")
            }
            else{
              alert("incorrect password for user")
            }
            
          }
          else{
            // alert("incorrect email for user")
          }
        }
          
          
        })
        
      


      }
      else{
        alert('invalid user')
      }
      
      
    }
}
