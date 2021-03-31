import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerDashboardComponent } from './seller/seller-dashboard/seller-dashboard.component';
import { BuyerDashboardComponent } from './buyer/buyer-dashboard/buyer-dashboard.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { RegisterComponent } from './core/register/register.component';
import { LoginComponent } from './core/login/login.component';

const routes: Routes = [
  {path : 'seller' , component : SellerDashboardComponent},
  {path : 'buyer' , component : BuyerDashboardComponent},
  {path : 'admin' , component : AdminDashboardComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'register' , component : RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
