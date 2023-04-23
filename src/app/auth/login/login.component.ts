import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm: Auth = {
    email: '',
    password: ''
  };

  constructor(private router: Router, private authServ: AuthService) { }

  /**
   *
   * @description navigate to route register
   * @memberof LoginComponent
   */
  goToRegister() {
    this.router.navigate(['/register']);
  };

  loginUser(form: Auth) {
    this.authServ.loginUser(form);
  };

}
