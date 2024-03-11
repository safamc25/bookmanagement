import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  base_url='https://bookserver-jrpx.onrender.com'

  constructor(private http:HttpClient) { }
  
  userApi(){
    return  this.http.get(`${this.base_url}/users`)
    }
}


