import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-name-render',
  templateUrl: './name-render.component.html',
  styleUrls: ['./name-render.component.scss']
})
export class NameRenderComponent {

  id : any
  firstName: any
  constructor(private activatedRoute: ActivatedRoute,public router:Router) {}

  agInit(params:any): void {
    this.id = params.data._id
    this.firstName  = params.data.firstName
  }

}
