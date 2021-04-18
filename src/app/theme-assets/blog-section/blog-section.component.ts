import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.scss']
})
export class BlogSectionComponent implements OnInit {
  allProducts : any
  pageLoading :any
  constructor(public router: Router, private apiService: ApiService) { 
    this.allProducts = []
    this.pageLoading = true
  }

  ngOnInit(): void {
    // this.getAllProducts()
  }

  getAllProducts(){
    this.apiService.get('sellerPro/all').subscribe((resp)=>{
      this.allProducts = resp.data
      this.pageLoading = false
    })
  }

  addCart(){
    alert('testing')
  }
}
