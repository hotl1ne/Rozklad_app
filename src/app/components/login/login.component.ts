import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login-service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

 constructor(private authService: LoginService, private route: Router) {}

  username: string = '';
  password: string = '';
  isLoggedIn: boolean = false;

  login(): void {

    
    this.isLoggedIn = this.authService.authenticate(this.username, this.password);

    if(this.isLoggedIn)
      {
        console.log("we are here");
        this.route.navigate(["/Profile"]);
      }
  }

}
