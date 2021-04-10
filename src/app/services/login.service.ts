import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedService } from './shared.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private sharedService: SharedService) {
    //Service Yet to be written
  }

  sendAuthRequest(body:any):Observable<any> {
    return this.http.post(this.getBaseUrl() + 'auth', body)
  }
  verifyToken(body:any):Observable<any>{
    return this.http.post(this.getBaseUrl() + 'auth/verifyToken', body)
  }

  getBaseUrl() {
    return environment.baseUrl
  }
}
