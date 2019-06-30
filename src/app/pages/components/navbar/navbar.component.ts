import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  logout() {
    this.auth.logout()
    this.router.navigateByUrl('/login')
  }
}
