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
  ProductForm: any
  submitted = false;
  fileToUpload: any;
  imageUrl: any;

  url: any
  format: any

  constructor(private apiService: ApiService, public router: Router) { }

  ngOnInit(): void {
    this.ProductForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
    })
  }


  onSelectFile(event: any) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      if (file.type.indexOf('image') > -1) {
        this.format = 'image';
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
      }
    }
  }

  get f() { return this.ProductForm.controls; }

  save() {
    this.submitted = true;
    if (this.ProductForm.invalid) {
      return;
    }
    const finalObject = {
      name:this.ProductForm.controls.name.value,
      description:this.ProductForm.controls.description.value,
      image:this.ProductForm.controls.image.value,
      price:this.ProductForm.controls.price.value,
    }
    console.log(finalObject)
  }

}
