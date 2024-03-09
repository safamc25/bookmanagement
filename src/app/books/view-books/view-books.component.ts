import { Component, OnInit } from '@angular/core';
import { BookService } from '../bookServices/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})
export class ViewBooksComponent implements OnInit {

  allbook: any = []
  bookName: string = ""
  sortOrder: string = '';
  UserName:any="";
  p: number = 1;
  authorName:string=""
  

  constructor(private bs: BookService,private rout:Router) {

  }
  
  
  ngOnInit(): void {
    this.getBook()
   
    this.UserName=localStorage.getItem("userName")
   
  }

  getBook() {
    this.bs.getBook().subscribe((data: any) => {
      this.allbook = data
      console.log(this.allbook);
     

    })
   
  }

  
  addReview(bookId: number, rating: number): void {
    // Assuming you have a service method to update the book's rating
    this.bs.addReview(bookId, rating).subscribe(() => {
      // Update the book's rating locally
      const bookIndex = this.allbook.findIndex((books: { id: number; }) => books.id === bookId);
      if (bookIndex !== -1) {
        this.allbook[bookIndex].rating = rating;
      }
    });
  }


logout(){
  localStorage.removeItem("userName")
  this.rout.navigateByUrl("")

}
}
 
