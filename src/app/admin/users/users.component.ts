import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ActionsCellRendererComponent } from 'src/app/core/ag-grid/actions-cell-renderer/actions-cell-renderer.component';
import { RegisterComponent } from 'src/app/core/register/register.component';
import { ApiService } from 'src/app/services/api.service';

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
  defaultColDef = {
    // sortable: true,
    // filter: 'agTextColumnFilter',
    // floatingFilter: true,
    // unSortIcon: true,
    // resizable: true
  }
  constructor(private apiService:ApiService,public router:Router,public dialog: MatDialog) { 
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
    const dialogRef = this.dialog.open(RegisterComponent , {
      width: "80%",
      height: "90%",
      data: { data: params.rowData._id, type: false  },
    });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  onEdit(params: { rowData: { _id: any; }; }) {
    const dialogRef = this.dialog.open(RegisterComponent , {
      width: "80%",
      height: "90%",
      data: { data: params.rowData._id, type: true  },
    });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
      // this.getAllLadgersMenu()
    // });
  }

  onDelete(){
    
  }


}
