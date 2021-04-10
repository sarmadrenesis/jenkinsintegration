import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import { environment } from './../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {

  constructor(private sharedService: SharedService, private http: HttpClient) { }

  getUserColumns() {
    return [
      {headerName: 'Name', field: 'name',
       valueGetter: (params:any) => {
          return params.data.firstName + ' ' + params.data.lastName
        }, width: 270},
      {headerName: 'Email', field: 'email', width: 270},
      {headerName: 'Status', field: 'isActive',
       valueGetter: (params:any) => {
         if (params.data.isActive == 1) return 'Active'
         return 'Inactive'
       }, width: 270},
      {headerName: 'Role', field: 'isAdmin',
       valueGetter: (params:any) => {
         if (params.data.isAdmin == 1) return 'Admin'
          return 'User'
       }, width: 270},
      {headerName: 'Actions', cellRenderer: 'actionsCellRenderer', sortable: false, filter: false, width: 270}
    ]
  }

  getUserRows() {
    return this.http.get(this.getBaseUrl() + 'users', this.sharedService.getHeaders())
  }

  createUser(user:any) {
    return this.http.post(this.getBaseUrl() + 'users', user, this.sharedService.getHeaders())
  }
  updateUser(userId:any, user:any) {
    return this.http.put(this.getBaseUrl() + 'users/' + userId, user, this.sharedService.getHeaders())
  }

  getUser(id:any) {
    return this.http.get(this.getBaseUrl() + `users/${id}`, this.sharedService.getHeaders())
  }

  deleteUser(id:any) {
    return this.http.delete(this.getBaseUrl() + `users/${id}`, this.sharedService.getHeaders())
  }

  changePassword(body:any) {
    return this.http.post(this.getBaseUrl() + `users/changePassword`,body , this.sharedService.getHeaders())
  }

  getBaseUrl() {
    return environment.baseUrl
  }
  resetTFA(userId:any) {
    return this.http.post(this.getBaseUrl() + 'users/resetTFA', userId, this.sharedService.getHeaders())
  }
  updateUserStatus(status:any){
    return this.http.put(this.getBaseUrl() + 'users/updateStatus/'+ status.id, status, this.sharedService.getHeaders())
  }
}
