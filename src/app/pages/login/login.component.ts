import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  user: UserModel = new UserModel()
  rememberUser = false

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if (localStorage.getItem('email')) {
      this.user.email = localStorage.getItem('email')
      this.rememberUser = true
    }
  }

  login(loginForm: NgForm) {
    if (loginForm.invalid) {
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Please wait'
    })
    Swal.showLoading();

    this.auth.login(this.user)
      .subscribe(resp => {
        Swal.close();

        if (this.rememberUser) {
          localStorage.setItem('email', this.user.email)
        }

        this.router.navigateByUrl('/home')

      }, (err) => {
        Swal.fire({
          type: 'error',
          title: 'Authentication error',
          text: err.error.error.message
        })
      })
  }
}
