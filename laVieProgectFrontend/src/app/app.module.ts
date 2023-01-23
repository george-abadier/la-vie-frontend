import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componants/navbar/navbar.component';
import { UserlayoutComponent } from './layouts/userlayout/userlayout.component';
import { FooterComponent } from './componants/footer/footer.component';
import { LoginComponent } from './componants/login/login.component';
import { SignUpComponent } from './componants/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserlayoutComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
