import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from './../services/shared.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {
  constructor(
    private sharedService:SharedService,
    private router: Router
  ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let token = this.sharedService.getUserToken() ;
      let access = localStorage.getItem('role')
      if (token == null){
        this.router.navigateByUrl('/login')
      }
      else{
        if(access != "admin"){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "You have no access.! please contact to admin",
          })
          this.router.navigateByUrl('/trades')
        }
      }
      return true;
  }
  
}
