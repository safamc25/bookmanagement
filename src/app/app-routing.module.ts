import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [  { path: 'books',canActivate:[authGuard], loadChildren: () => import('./books/books.module').then(m => m.BooksModule) },
{path:"",component:LoginComponent },
{path:'**',redirectTo:""}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
