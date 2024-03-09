import { CanActivateFn, Router } from '@angular/router';
import { ToastService } from '../services/toast.service';
import { inject } from '@angular/core';
import { GuardService } from '../services/guard.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authStatus=inject(GuardService)
  const rout=inject(Router)
  const toast=inject(ToastService)

  if(authStatus.isLoggedIn()){
    return true
  }

 else{
  toast.showError("Please login")
  rout.navigateByUrl("")
  return false
 }
 
};
