import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../bookServices/book.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {

  allbook: any = []
  bookName: string = ""
  authorName:string=""
  sortOrder: string = '';
  AdminUserName:any="";
  p: number = 1;

  constructor(private bs: BookService,private rout:Router,private toast:ToastService) {

  }

  ngOnInit(): void {
    this.getBook()
   
    this.AdminUserName=localStorage.getItem("userName")
   
  }

  getBook() {
    this.bs.getBook().subscribe((data: any) => {
      this.allbook = data
      console.log(this.allbook);
     

    })
  }

  removeBook(id: any) {
    this.bs.deleteBook(id).subscribe((result: any) => {
        // to refresh
        this.getBook()
      this.toast.showSuccess('book removed')


    
    })
  }



onSortOrderChange(selectedOption: string): void {
  this.sortOrder = selectedOption;
}

logout(){
  localStorage.removeItem("userName")
  this.rout.navigateByUrl("")

}
}
