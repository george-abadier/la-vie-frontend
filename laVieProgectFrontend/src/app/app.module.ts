import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componants/navbar/navbar.component';
import { UserlayoutComponent } from './layouts/userlayout/userlayout.component';
import { FooterComponent } from './componants/footer/footer.component';
import { LoginComponent } from './componants/login/login.component';
import { SignUpComponent } from './componants/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule}from '@angular/common/http';
import { MarketComponent } from './componants/market/market.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserlayoutComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    MarketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
