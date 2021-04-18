import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { ActionsCellRendererComponent } from 'src/app/core/ag-grid/actions-cell-renderer/actions-cell-renderer.component';
import { NameRenderComponent } from 'src/app/core/ag-grid/name-render/name-render.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.scss']
})
export class SellersComponent implements OnInit {
  @ViewChild('agGrid')
  agGrid: AgGridAngular | any;
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
    this.rowData = []
    this.columnDefs = [
      { field: 'firstName',cellRenderer: "ViewRenderer"},
      {field : 'lastName'},
      { field: 'email'},
      { field: 'isVerified'},
      { field: 'roleName'},
    ];
    this.frameworkComponents = {
      ViewRenderer: NameRenderComponent,
    };
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

}
