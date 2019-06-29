import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {
  user: UserModel

  constructor() { }

  ngOnInit() {
    this.user = new UserModel();
  }

  onSubmit(registerForm: NgForm) {

    if (registerForm.invalid) {
      return;
    }

    console.log('Formulario enviado');
    console.log(this.user);
    console.log(registerForm);
    
    
  }

}
