import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-product-five',
  templateUrl: './product-five.component.html',
  styleUrls: ['./product-five.component.scss']
})
export class ProductFiveComponent implements OnInit {

  constructor(public router: Router, private apiService: ApiService) { }

  ngOnInit(): void {

  }


}
