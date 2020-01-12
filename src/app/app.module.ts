import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArrayComponent } from './array/array.component';
import { ParentComponent } from './component/parent-child-basic/parent/parent.component';
import { ChildComponent } from './component/parent-child-basic/child/child.component';
import { SubchildComponent } from './component/parent-child-basic/subchild/subchild.component';
import { CurrencyMaskModule } from "ngx-currency-mask";
import { NgxCurrencyModule } from "ngx-currency";
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from './app-routing.module'
@NgModule({
  declarations: [
    AppComponent,
    ArrayComponent,
    ParentComponent,
    ChildComponent,
    SubchildComponent,
    Page1Component,
    Page2Component,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,

   NgxCurrencyModule,
   AppRoutingModule,



    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]})
export class AppModule { }
