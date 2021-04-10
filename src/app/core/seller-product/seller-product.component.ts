import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-seller-product',
  templateUrl: './seller-product.component.html',
  styleUrls: ['./seller-product.component.scss']
})
export class SellerProductComponent implements OnInit {
  ProductForm:any
  submitted = false;

  constructor(private apiService : ApiService,public router: Router) { }

  ngOnInit(): void {
    this.ProductForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }

  get f() { return this.ProductForm.controls; }

  save() {
    this.submitted = true;
    if (this.ProductForm.invalid) {
      return;
    }
  }

}
