import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { AllBooksComponent } from './all-books/all-books.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './bookpipe/search.pipe';
import { SortPipe } from './bookpipe/sort.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddUserComponent } from '../add-user/add-user.component';
import { ViewBooksComponent } from './view-books/view-books.component';


@NgModule({
  declarations: [
    BooksComponent,
    AddBookComponent,
    EditBookComponent,
    AllBooksComponent,
    ViewBooksComponent,
    SearchPipe,
    SortPipe,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class BooksModule { }
