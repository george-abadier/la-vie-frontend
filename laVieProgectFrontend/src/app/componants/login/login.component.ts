import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(public auth:AuthService){}
  
  login(password:string,email:string){
    this.auth.login('user',{email,password},'normal').subscribe((apiRes)=>{
      console.log(apiRes)
    })
  }
}
