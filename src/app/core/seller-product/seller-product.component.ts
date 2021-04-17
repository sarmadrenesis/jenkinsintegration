import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

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
  image :any;
  url: any
  format: any
  userId :any;

  constructor(private apiService: ApiService, public router: Router,private authenticationService:AuthenticationService) { 
    this.userId = ''
  }

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
    this.imageUrl = file
    console.log(this.imageUrl)
    console.log(file,'000000000')
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
    let token  = this.authenticationService.getUserToken()
    this.userId = token?.split(' ');
    this.userId = this.userId[0]
    const finalObject = {
      name:this.ProductForm.controls.name.value,
      description:this.ProductForm.controls.description.value,
      price:this.ProductForm.controls.price.value,
      image: this.image,
      addedBy: this.userId
    }
    console.log(finalObject)
    this.apiService.add('sellerPro/add',finalObject).subscribe((resp)=>{
    })
  }



  changeListener($event: { target: any; }) : void {
    this.readThis($event.target);
  }
  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image = myReader.result;
    }
    myReader.readAsDataURL(file);
  }

}
