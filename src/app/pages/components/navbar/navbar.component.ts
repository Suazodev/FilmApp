import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  
  logout() {
    this.auth.logout()
    this.router.navigateByUrl('/login')
  }

  navigateSearch(){
    if (this.auth.isAuthenticated() ) {
      this.router.navigateByUrl('/search')
    }
  }

  navigateFavorites(){
    this.router.navigateByUrl('/favorites')
  }

}
