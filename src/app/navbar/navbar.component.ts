import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;

  constructor(public router: Router) {}

  ngOnInit(): void {}

  goToMoviesPage(): void {
    this.router.navigate(['movies']);
  }

  goToProfilePage(): void {
    this.router.navigate(['profile']);
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['welcome']).then(() => {
      window.location.reload();
    });
  }
}
