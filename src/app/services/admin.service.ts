import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  base_url='http://localhost:8000'

  constructor(private http:HttpClient) { }
  loginApi(){
  return  this.http.get(`${this.base_url}/admins`)
  }
  userApi(){
    return  this.http.get(`${this.base_url}/users`)
    }

  }
