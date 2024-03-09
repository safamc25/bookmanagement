import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ViewBooksComponent } from './view-books/view-books.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { SingleViewComponent } from './single-view/single-view.component';


const routes: Routes = [{ path: '',component: AllBooksComponent },
{path:"add-book",component:AddBookComponent},     
{path:"edit-book/:id",component:EditBookComponent} ,
{path:"view-books",component:ViewBooksComponent} ,
{path:"add-user",component:AddUserComponent},
{path:'view-books/single/:id',component:SingleViewComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
