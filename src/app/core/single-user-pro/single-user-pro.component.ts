import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';
import { ActionsCellRendererComponent } from '../ag-grid/actions-cell-renderer/actions-cell-renderer.component';

@Component({
  selector: 'app-single-user-pro',
  templateUrl: './single-user-pro.component.html',
  styleUrls: ['./single-user-pro.component.scss']
})
export class SingleUserProComponent implements OnInit {
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
  allProducts : any
  pageLoading :any
  userID:any
  constructor(public router: Router, private apiService: ApiService,private activatedRoute: ActivatedRoute,public dialog: MatDialog) { 
    this.frameworkComponents = {
      buttonRenderer: ActionsCellRendererComponent ,
    };
    this.rowData = []
    this.columnDefs = [
      { field: 'name'},
      {field : 'description'},
      { field: 'price'},
      { field: 'image'},
      // { field: 'addedBy'},
      { field: 'Actions' , cellRenderer : 'buttonRenderer' , pinned: 'right', width: 200, cellRendererParams: {
        edit: this.onEdit.bind(this),
        delete: this.onDelete.bind(this),
        view: this.onView.bind(this)
      },},
    ];
    this.allProducts = []
    this.pageLoading = true
    this.userID = this.activatedRoute.snapshot.params.id
  }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts(){
    this.apiService.get('sellerPro/all').subscribe((resp)=>{
      let arr: any[] = []
      resp.data.forEach((element:any) => {
        if(element.addedBy._id ===  this.userID){
          arr.push(element)
        }
      });
      this.rowData = arr
      this.pageLoading = false
      this.pageLoading = false
    })
  }

  onView(params: { rowData: { _id: any; }; }) {
    this.router.navigateByUrl(`sellerProduct:view/${params.rowData._id}`)
  }

  onEdit(params: { rowData: { _id: any; }; }) {
    this.router.navigateByUrl(`sellerProduct:edit/${params.rowData._id}`)
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
      // if (result.isConfirmed) {
      //   this.http.delete(`${environment.baseUrl}/users/deleteSingleUser/${params.rowData._id}`).subscribe((resp:any)=>{
      //     if(resp.status === 'success'){
      //       Swal.fire(
      //         'Deleted!',
      //         'Your file has been deleted.',
      //         'success'
      //       )
      //     }
      //     this.getAllUsers()
      //   })
      // }
    })
  }

}
