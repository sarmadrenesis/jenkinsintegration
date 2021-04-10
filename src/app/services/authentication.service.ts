import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private apiService:ApiService,
    private sharedService:SharedService
  ) { }

  getUserToken() {
    return localStorage.getItem('token')
  }
}
