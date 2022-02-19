import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {FbAuthResponse, User} from "../interfaces";
import {catchError, ObservableInput, tap, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
  ) {}

  get token(): string {
    const expDate = new Date(localStorage.getItem('fb-token-exp') || '');

    if(expDate > new Date()) {
      return localStorage.getItem('fb-token') || '';
    }

    this.logout();
    return '';
  }

  public isAuthenticated(): boolean {
    return !!this.token;
  }

  public register(user: User) {
    user.returnSecureToken = true;

    return this.http
      .post<FbAuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.apiKey}`, user)
      .pipe(
        tap<FbAuthResponse>(this.setToken),
        catchError(this.handleError.bind(this))
      );
  }

  public login(user: User) {
    user.returnSecureToken = true;

    return this.http
      .post<FbAuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap<FbAuthResponse>(this.setToken),
        catchError(this.handleError.bind(this))
      );
  }

  public logout() {
    this.setToken(null);
  }

  private handleError(error: HttpErrorResponse): ObservableInput<any> {
    return throwError(() => error);
  }

  private setToken(res: FbAuthResponse | null): void {
    if(res) {
      const expDate = new Date(+res.expiresIn * 1000 + new Date().getTime());
      localStorage.setItem('fb-token', res.idToken);
      localStorage.setItem('fb-token-exp', expDate.toString());
    } else {
      localStorage.clear();
    }
  }
}
