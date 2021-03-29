import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ModalBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
