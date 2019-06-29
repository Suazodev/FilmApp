import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
  private aapiKey = 'AIzaSyD9ZXHKlyG7D-0pAG4btKC22ZLtELwbAc4'

//  /signupNewUser?key=[API_KEY]

//  /verifyPassword?key=[API_KEY]

  constructor(
    private http: HttpClient
  ) { }

  login() {
    
  }

  logout(user: UserModel) {

  }

  signup(user: UserModel) {

  }

}
