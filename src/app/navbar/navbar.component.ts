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

  /**
   * navigates user to the /movies route
   */
  goToMoviesPage(): void {
    this.router.navigate(['movies']);
  }
  /**
   * navigates user to the /profile route
   */
  goToProfilePage(): void {
    this.router.navigate(['profile']);
  }

  /**
   * Logs user out by clearing the localStorage and by navigating to the welcome page.
   */
  logout(): void {
    localStorage.clear();
    this.router.navigate(['welcome']).then(() => {
      window.location.reload();
    });
  }
}
