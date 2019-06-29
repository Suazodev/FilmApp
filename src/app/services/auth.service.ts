import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
  private apiKey = 'AIzaSyD9ZXHKlyG7D-0pAG4btKC22ZLtELwbAc4'

  userToken: string

  constructor(private http: HttpClient) {
    this.loadToken()
  }

  login(user: UserModel) {
    const AUTHDATA = {
      ...user,
      returnSecureToken: true
    };
    return this.http.post(`${this.url}/verifyPassword?key=${this.apiKey}`, AUTHDATA) 
    .pipe(map(resp => {
      this.saveToken(resp['idToken'])
      return resp
    }))
  }

  logout(user: UserModel) {

  }

  signup(user: UserModel) {
    const AUTHDATA = {
      ...user,
      returnSecureToken: true
    };
    return this.http.post(`${this.url}/signupNewUser?key=${this.apiKey}`, AUTHDATA)
      .pipe(map(resp => {
        this.saveToken(resp['idToken'])
        return resp
      }))
  }

  private saveToken(idToken: string) {
    this.userToken = idToken
    localStorage.setItem('token', idToken)
  }

  loadToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token')
    } else {
      this.userToken = ''
    }
    return this.userToken
  }

  isAuthenticated(): boolean {
    return this.userToken.length > 2
  }

}
