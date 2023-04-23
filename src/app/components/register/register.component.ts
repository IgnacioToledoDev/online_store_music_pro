import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/interfaces/user';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public registerForm: User = {
    username: '',
    email: '',
    password: ''
  };
  constructor(private router: Router, private authServ: AuthService) { }

  goToLogin() {
    this.router.navigate(['/login'])
  }

  registerNewUser(form: User) {
    const jsonUser = JSON.stringify(form)
    console.log(jsonUser)
    this.authServ.registerNewUser(form);
  };
}
