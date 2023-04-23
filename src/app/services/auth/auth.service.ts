import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Auth, User } from '../../interfaces/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = "http://localhost:8080/auth"
  constructor(private http: HttpClient, private router: Router) { };

  registerNewUser(user: User) {
    return this.http.post(`${this.url}/register`, user)
      .subscribe(response => {
        if (!response) alert("Hubo un error, reintentar porfavor");
        this.router.navigate(['/login'])
      },
        err => { console.log(`Oh a ocurrido un error ${err}`); });
  };

  loginUser(user: User) {
    return this.http.post(`${this.url}/login`, user)
      .subscribe(response => {
        if (!response) alert('Correo y/o contrasenia erronea');
        console.log('Has iniciado session con user', user);
        this.router.navigate(['/'])
      }, err => {
        console.log(`Oh a ocurrido un error ${err.message}`);
        alert('Correo y/o contra erronea, por favor volver a intentar')
      });
  };
};
