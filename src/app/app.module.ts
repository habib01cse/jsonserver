import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { OrdersModule } from './orders/orders.module';
import { SiteFrameworkModule } from './site-framework/site-framework.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    OrdersModule,
    SiteFrameworkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
