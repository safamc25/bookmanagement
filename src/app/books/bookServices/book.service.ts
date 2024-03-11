import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
  baseUrl=('https://bookserver-jrpx.onrender.com')

  constructor(private http:HttpClient) { }

  // addbook Api

  addBook(bodyData:any){
   return this.http.post(`${this.baseUrl}/books`,bodyData)
  }

  // allbook Api

  getBook(){
   return this.http.get(`${this.baseUrl}/books`)
  }

  // delete book

  deleteBook(id:any){
    return this.http.delete(`${this.baseUrl}/books/${id}`)
  }


  // acces single book

  getbookData(bid:any){
  return this.http.get(`${this.baseUrl}/books/${bid}`)
  }

  // update book data
  Updatebook(id:any,bodyData:any){
    return this.http.put(`${this.baseUrl}/books/${id}`,bodyData)
  }


  addUser(bodyData:any){
    return this.http.post(`${this.baseUrl}/users`,bodyData)
   }

   addReview(bookId: number, rating: number): Observable<any> {
    const reviewData = { bookId, rating };
    return this.http.post(`${this.baseUrl}/addReview`, reviewData);
   }

  
}
