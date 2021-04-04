import { Component, OnInit } from '@angular/core';
import { ButtonRenderComponent } from 'src/app/core/ag-grid/button-render/button-render.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  frameworkComponents: any;
  rowData : any
  defaultColDef = {
    // sortable: true,
    // filter: 'agTextColumnFilter',
    // floatingFilter: true,
    // unSortIcon: true,
    // resizable: true
  }
  constructor() { 
    this.frameworkComponents = {
      buttonRenderer: ButtonRenderComponent ,
    };
  }

  ngOnInit(): void {
  }

}
