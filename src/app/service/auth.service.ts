import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtHelper} from 'angular2-jwt';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {AuthResponse} from '../dto/auth.response';
import {User} from '../model/user';

@Injectable()
export class AuthService {

  jwtHelper = new JwtHelper();
  loggedIn = new BehaviorSubject<boolean>(this.isAuthenticated());
  currentUser = new BehaviorSubject<User>(this.formUser());

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<AuthResponse> {
    const authParams = {
      username: username,
      password: password
    };
    return this.http.post<AuthResponse>(`${environment.api}auth`, authParams);
  }

  isAuthenticated(): boolean {
    if (!localStorage.getItem('token')) {
      return false;
    } else {
      if (this.jwtHelper.isTokenExpired(localStorage.getItem('token'))) {
        localStorage.removeItem('token');
        return false;
      }
      return !this.jwtHelper.isTokenExpired(localStorage.getItem('token'));
    }
  }

  formUser(): User {
    if (!localStorage.getItem('token')) {
      return null;
    } else {
      const token = this.jwtHelper.decodeToken(localStorage.getItem('token'));
      return new User(token.id, token.email, token.username);
    }
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  getCurrentUser(): Observable<User> {
    return this.currentUser.asObservable();
  }

  getRole(): string {
    if (!localStorage.getItem('token')) {
      return 'unauthorized';
    }
    const role = this.jwtHelper.decodeToken(localStorage.getItem('token')).role;
    return role.toLowerCase();
  }

  getUserID(): number {
    if (!localStorage.getItem('token')) {
      return null;
    }
    return this.jwtHelper.decodeToken(localStorage.getItem('token')).id;
  }

  public setToken(token: string): void {
    localStorage.setItem('token', token);
    this.loggedIn.next(true);
    this.currentUser.next(this.formUser());
  }

  public unsetToken(): void {
    localStorage.removeItem('token');
    this.loggedIn.next(false);
    this.currentUser.next(this.formUser());
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }
}
