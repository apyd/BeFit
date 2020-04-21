import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddProductFormComponent } from './add-product-form/add-product-form.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './products-list/product/product.component';
import {HttpService} from './shared/http.service';

@NgModule({
  declarations: [
    AppComponent,
    AddProductFormComponent,
    ProductsListComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
