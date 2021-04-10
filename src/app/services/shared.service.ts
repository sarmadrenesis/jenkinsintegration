import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
// import {MatSnackBar} from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(Boolean(localStorage.getItem('token')))

  constructor(private dialog: MatDialog, 
    // private _snackBar: MatSnackBar, 
    private router: Router) {
  }

  updateUserStatus(status :any) {
    this.isUserLoggedIn.next(status)
  }

  setUserToken(value:any) {
    localStorage.setItem('token', value.token)
    localStorage.setItem('id', value.id)
    localStorage.setItem('isAdmin', value.isAdmin)
  }

  getUserToken() {
    return localStorage.getItem('token')
  }
  getUserId() {
    return localStorage.getItem('id')
  }
  getUserRole() {
    return localStorage.getItem('isAdmin')
  }

  clearUserToken() {
    localStorage.removeItem('token')
  }

  getHeaders() {
    const headersObj = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization': `Bearer ${this.getUserToken()}`
    }
    if(this.getUserId()) {
      // headersObj['userId'] = this.getUserId()
    }
    const options = {
      headers: new HttpHeaders(headersObj)
    }
    return options
  }
  logout(){
    this.updateUserStatus(false);
    this.clearUserToken();
    this.router.navigate(['login']);
  }
  /* showNotification(data) {
    const dialogRef = this.dialog.open(NotificationComponent, {
      data,
      height: '200px',
      width: '400px'
    })
    setTimeout(() =>{
      dialogRef.close()
    },2000)
  } */
  showNotification(data:any) {
    // this._snackBar.open(data.message, '', {
    //   duration: 2000,
    // });
  }
  showDialogNotification(data:any){
    let notification: any = {
      title: data.title,
      text: data.text,
      icon: data.status,
      showConfirmButton: data.confirmBtn,
      position: 'center',
    }
    if(!data.confirmBtn) notification.timer = 3000
    Swal.fire(notification)
  }
}
