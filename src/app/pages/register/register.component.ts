import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {
  user: UserModel
  rememberUser = false

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = new UserModel();
  }

  onSubmit(registerForm: NgForm) {

    if (registerForm.invalid) {
      return;
    }
    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Please wait'
    })
    Swal.showLoading();
    this.auth.signup(this.user)
      .subscribe(resp => {
        Swal.close();
        if (localStorage.getItem('email')) {
          this.user.email = localStorage.getItem('email')
          this.rememberUser = true
        }
        this.router.navigateByUrl('/home/search')
      }, (err) => {
        Swal.fire({
          type: 'error',
          title: 'Authentication error',
          text: err.error.error.message
        })
      }
      )
  }
}
