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

  logout() {
    localStorage.removeItem('token')
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
    let today = new Date();
    today.setSeconds(3600)
    localStorage.setItem('expires', today.getTime().toString())
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
    if (this.userToken.length < 2) {
      return false
    }
    
    const EXPIRE = Number(localStorage.getItem('expire'))
    const EXPIREDATE = new Date()
    EXPIREDATE.setTime(EXPIRE)

    if (EXPIREDATE > new Date()) {
      return true
    } else {
      return false
    }
  }

}
