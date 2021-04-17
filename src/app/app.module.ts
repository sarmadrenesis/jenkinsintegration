import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffcanvasMenuComponent } from './theme-assets/offcanvas-menu/offcanvas-menu.component';
import { HeaderComponent } from './theme-assets/header/header.component';
import { SliderComponent } from './theme-assets/slider/slider.component';
import { BannerAreaComponent } from './theme-assets/banner-area/banner-area.component';
import { ProductFiveComponent } from './theme-assets/product-five/product-five.component';
import { BannerFullwidthComponent } from './theme-assets/banner-fullwidth/banner-fullwidth.component';
import { ProductAreaComponent } from './theme-assets/product-area/product-area.component';
import { BlogSectionComponent } from './theme-assets/blog-section/blog-section.component';
import { CustomProductAreaComponent } from './theme-assets/custom-product-area/custom-product-area.component';
import { BrandAreaComponent } from './theme-assets/brand-area/brand-area.component';
import { FooterWidgetsComponent } from './theme-assets/footer-widgets/footer-widgets.component';
import { ModalBoxComponent } from './theme-assets/modal-box/modal-box.component';
import { SellerDashboardComponent } from './seller/seller-dashboard/seller-dashboard.component';
import { BuyerDashboardComponent } from './buyer/buyer-dashboard/buyer-dashboard.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { RegisterComponent } from './core/register/register.component';
import { LoginComponent } from './core/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { TopBarComponent } from './core/top-bar/top-bar.component';
import { SideBarComponent } from './core/side-bar/side-bar.component';
import { FooterBarComponent } from './core/footer-bar/footer-bar.component';
import { MainContainerBarComponent } from './core/main-container-bar/main-container-bar.component';
import { UsersComponent } from './admin/users/users.component';
// import 'ag-grid-enterprise';
import { NameRenderComponent } from './core/ag-grid/name-render/name-render.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ActionsCellRendererComponent } from './core/ag-grid/actions-cell-renderer/actions-cell-renderer.component';
import { SellerComponent } from './theme-assets/pages/seller/seller.component';
import { SellerProductComponent } from './core/seller-product/seller-product.component';
import { PopupComponent } from './core/popup/popup.component';


@NgModule({
  declarations: [
    AppComponent,
    OffcanvasMenuComponent,
    HeaderComponent,
    SliderComponent,
    BannerAreaComponent,
    ProductFiveComponent,
    BannerFullwidthComponent,
    ProductAreaComponent,
    BlogSectionComponent,
    CustomProductAreaComponent,
    BrandAreaComponent,
    FooterWidgetsComponent,
    ModalBoxComponent,
    SellerDashboardComponent,
    BuyerDashboardComponent,
    AdminDashboardComponent,
    RegisterComponent,
    LoginComponent,
    TopBarComponent,
    SideBarComponent,
    FooterBarComponent,
    MainContainerBarComponent,
    UsersComponent,
    ActionsCellRendererComponent,
    NameRenderComponent,
    SellerComponent,
    SellerProductComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule, BrowserAnimationsModule,
    DemoMaterialModule,
    AgGridModule.withComponents([ActionsCellRendererComponent]),
    HttpClientModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
