import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  imageLoading :any
  url: any
  heading:any
  mode: any;
  format: any
  userId :any;
  isPageLoading:any

  constructor(private apiService: ApiService, public router: Router,private authenticationService:AuthenticationService,public activatedRoute: ActivatedRoute) { 
    this.userId = ''
    this.imageLoading = true
    this.mode = this.activatedRoute.snapshot.data.mode;
    if (this.mode == 'view') {
      this.heading = 'View Product';
      this.isPageLoading = true;
      this.apiService
        .get(`sellerPro/findOne/${this.activatedRoute.snapshot.params.id}`)
        .subscribe(
          (data) => {
            this.ProductForm = new FormGroup({
              name: new FormControl(data.data.name),
              description: new FormControl(data.data.description),
              price: new FormControl(data.data.price),
            });
            this.image = data.data.image
            this.imageLoading =  false
          },
          (error) => {
          }
        );
        this.isPageLoading = false
    }else if(this.mode == 'edit') {
      this.heading = 'Edit Product';
      this.isPageLoading = true;
      this.apiService
        .get(`sellerPro/findOne/${this.activatedRoute.snapshot.params.id}`)
        .subscribe(
          (data) => {
            this.ProductForm = new FormGroup({
              name: new FormControl(data.data.name),
              description: new FormControl(data.data.description),
              image: new FormControl(''),
              price: new FormControl(data.data.price),
            });
            this.image = data.data.image
            this.imageLoading =  false
          },
          (error) => {
          }
        );
        this.isPageLoading = false
    }else{
      this.heading = 'Add Product';
    }  
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


  Update(){
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
    this.apiService.edit(`sellerPro/edit/${this.activatedRoute.snapshot.params.id}`,finalObject).subscribe((resp)=>{
    })
  }
}
