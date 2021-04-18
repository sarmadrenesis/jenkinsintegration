import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionsCellRendererComponent } from 'src/app/core/ag-grid/actions-cell-renderer/actions-cell-renderer.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
  styleUrls: ['./buyers.component.scss']
})
export class BuyersComponent implements OnInit {
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
    ];
  }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    this.showGrid =  false
    this.apiService.get(`users/allUser`).subscribe(result=>{
      result.data.forEach((element:any) => {
        if(element.role.roleName === 'buyer'){
          this.rowData.push({"_id":element._id ,"firstName" : element.firstName , "lastName": element.lastName , "email" : element.email,"isVerified":element.isVerified,"roleName" : element.role.roleName })
        }
       this.showGrid =  true
     });
    })
  }

}
