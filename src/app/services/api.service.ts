import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {LoginService} from './login.service'
import { SharedService } from './shared.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  delete(arg0: string) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient,private loginService:LoginService, private sharedService: SharedService) { }
  get(url: string, mock?: boolean, noEncode?: boolean): Observable<any> {
    url = noEncode ? url : encodeURI(url)
    url = mock ? environment.mockUrl + url : environment.baseUrl + url
    return this.http.get(url, this.sharedService.getHeaders())
  }
  postToFbr(url: string, body: any, mock?: boolean, noEncode: boolean = false): Observable<any> {
    body = { ...body }
    return this.http.post(url, body)
  }
  add(url: string, body: any, mock?: boolean, noEncode: boolean = false): Observable<any> {
    url = noEncode ? url : encodeURI(url)
    body = { ...body }
    url = mock ? environment.mockUrl + url : environment.baseUrl + url
    return this.http.post(url, body, this.sharedService.getHeaders())
  }
  edit(
    url: string,
    body?: any,
    mock?: boolean,
    contentType: string = 'application/json',
    embedUrl: boolean = true,
    noEncode = false
  ): Observable<any> {
    url = noEncode ? url : encodeURI(url)
    embedUrl ? (url = mock ? environment.mockUrl + url : environment.baseUrl + url) : (url = url)
    return this.http.put(url, body, this.sharedService.getHeaders())
  }
  patch(url: string, body: any, flag: boolean = false, noEncode = false): Observable<any> {
    url = noEncode ? url : encodeURI(url)
    body = { ...body, showToastr: flag }
    url = environment.baseUrl + url
    return this.http.patch(url, body)
  }
  private createHttpHeaders() {
    const headersObj = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    }
    const options = {
      headers: new HttpHeaders(headersObj)
    }
    return { headers: options }
  }

}

