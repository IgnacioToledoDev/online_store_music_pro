import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router) { }

  /**
   *
   * @description navigate to route register
   * @memberof LoginComponent
   */
  goToRegister() {
    this.router.navigate(['/register'])
  }

}
