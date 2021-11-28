import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { AllMoviesComponent } from '../all-movies/all-movies.component';
import { ProfileComponent } from '../profile/profile.component';
import { UserLoginFormComponent } from '../user-login-form/user-login-form.component';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {}

  // this is the function that will open the dialog after clickling signup button
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      width: '480px',
    });
  }

  openUserLoginDialog(): void {
    this.dialog.open(UserLoginFormComponent, {
      width: '480px',
    });
  }

  openMoviesDialog(): void {
    this.dialog.open(AllMoviesComponent, {
      width: '1000px',
    });
  }

  showUser(): void {
    this.dialog.open(ProfileComponent, {
      width: '500px',
    });

  }

}
