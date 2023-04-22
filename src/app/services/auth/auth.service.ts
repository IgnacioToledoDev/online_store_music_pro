import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Auth } from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = "localhost:8080/auth"
  constructor(private http: HttpClient) { };

  registerNewUser(user: Auth): Observable<any> {
    return this.http.post(`${this.url}/register`, user);
  };

  loginUser(user: Auth): Observable<any> {
    return this.http.post(`${this.url}/login`, user);
  };
};
