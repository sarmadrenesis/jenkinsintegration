import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerDashboardComponent } from './seller/seller-dashboard/seller-dashboard.component';
import { BuyerDashboardComponent } from './buyer/buyer-dashboard/buyer-dashboard.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { RegisterComponent } from './core/register/register.component';
import { LoginComponent } from './core/login/login.component';
import { UsersComponent } from './admin/users/users.component';
import { SellerComponent } from './theme-assets/pages/seller/seller.component';
import { SellerProductComponent } from './core/seller-product/seller-product.component';
import { BuyersComponent } from './admin/buyers/buyers.component';
import { SellersComponent } from './admin/sellers/sellers.component';
import { SingleUserProComponent } from './core/single-user-pro/single-user-pro.component';


const routes: Routes = [
  {path : 'seller-dashboard' , component : SellerDashboardComponent},
  {path : 'buyer-dashboard' , component : BuyerDashboardComponent},
  {path : 'admin-dashboard' , component : AdminDashboardComponent , children:[ 
    {path : 'users' , component:UsersComponent },
    {path : 'sellers' , component:SellersComponent },
    {path:'sellers/:id',component:SingleUserProComponent},
  ] },

  {path : 'login' , component : LoginComponent},
  {path : 'register' , component : RegisterComponent,data: { mode: 'add' } },
  {path : 'register:view/:id' , component : RegisterComponent,data: { mode: 'view' } },
  {path : 'register:edit/:id' , component : RegisterComponent,data: { mode: 'edit' } },

  {path : 'seller' , component : SellerComponent},
  
  {path : 'sellerProduct' , component : SellerProductComponent , data: { mode: 'add' }},
  {path : 'sellerProduct:view/:id' , component : SellerProductComponent , data: { mode: 'view' }},
  {path : 'sellerProduct:edit/:id' , component : SellerProductComponent, data: { mode: 'edit' }},


  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
