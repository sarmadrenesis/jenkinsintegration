import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router,ActivatedRoute } from '@angular/router';
import { ActionsCellRendererComponent } from 'src/app/core/ag-grid/actions-cell-renderer/actions-cell-renderer.component';
import { RegisterComponent } from 'src/app/core/register/register.component';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';
import { environment } from './../../../environments/environment'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  frameworkComponents: any;
  rowData : any
  columnDefs :any;
  showGrid : any;
  mode: any;
  heading: any

  defaultColDef = {
    // sortable: true,
    // filter: 'agTextColumnFilter',
    // floatingFilter: true,
    // unSortIcon: true,
    // resizable: true
  }
    
    constructor(private apiService:ApiService,public router:Router,public dialog: MatDialog,public activatedRoute: ActivatedRoute, private http: HttpClient) {  
    this.frameworkComponents = {
      buttonRenderer: ActionsCellRendererComponent ,
    };
    this.rowData = []
    this.columnDefs = [
      { field: 'firstName'},
      {field : 'lastName'},
      { field: 'email'},
      { field: 'isVerified'},
      { field: 'roleName'},
      { field: 'Actions' , cellRenderer : 'buttonRenderer' , pinned: 'right', width: 200, cellRendererParams: {
        edit: this.onEdit.bind(this),
        delete: this.onDelete.bind(this),
        view: this.onView.bind(this)
      },},
    ];
  
  }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    this.showGrid =  false
    this.apiService.get(`users/allUser`).subscribe(result=>{
      result.data.forEach((element:any) => {
        console.log(element)
       this.rowData.push({"_id":element._id ,"firstName" : element.firstName , "lastName": element.lastName , "email" : element.email,"isVerified":element.isVerified,"roleName" : element.role.roleName })
       console.log(this.rowData)
       this.showGrid =  true
     });
    })
  }
  

  onView(params: { rowData: { _id: any; }; }) {
    this.router.navigateByUrl(`register:view/${params.rowData._id}`)
  }

  onEdit(params: { rowData: { _id: any; }; }) {
    this.router.navigateByUrl(`register:edit/${params.rowData._id}`)
  }

  onDelete(params: { rowData: { _id: any; }; }){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.delete(`${environment.baseUrl}/users/deleteSingleUser/${params.rowData._id}`).subscribe((resp:any)=>{
          if(resp.status === 'success'){
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
          this.getAllUsers()
        })
      }
    })
  }


}
