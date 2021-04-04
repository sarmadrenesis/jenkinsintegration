import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-render',
  templateUrl: './button-render.component.html',
  styleUrls: ['./button-render.component.scss']
})
export class ButtonRenderComponent {

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
