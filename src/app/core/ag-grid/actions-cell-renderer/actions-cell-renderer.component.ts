import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminDashboardService } from 'src/app/services/admin-dashboard.service';
import { GridService } from 'src/app/services/grid.service';
import { SharedService } from 'src/app/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actions-cell-renderer',
  templateUrl: './actions-cell-renderer.component.html',
  styleUrls: ['./actions-cell-renderer.component.scss']
})
export class ActionsCellRendererComponent {
  params :any;
  label: string | undefined;

  constructor(public router : Router){}

  agInit(params:any): void {
    this.params = params;
  }

  refresh(params?: any): boolean {
    return true;
  }

  onEdit($event:any) {
    if (this.params.edit instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data
        // ...something
      }
      this.params.edit(params);
    }
  }

  onDelete($event:any) {
    if (this.params.delete instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data
        // ...something
      }
      this.params.delete(params);
    }
  }

  onView($event:any) {
    if (this.params.edit instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data
        // ...something
      }
      this.params.view(params);
    }
  }

}
