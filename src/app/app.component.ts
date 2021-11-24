import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';

@Component({
  selector: 'app-root', // where to put app.component.ts => <app-root> in index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MovieManiac';

  constructor(public dialog: MatDialog) { }

  // this is the function that will open the dialog after clickling signup button
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      width: '480px'
    });
  }

  openUserLoginDialog(): void {
    this.dialog.open(UserLoginFormComponent, {
      width: '480px'
    });

  }

  openMoviesDialog(): void {
    this.dialog.open(AllMoviesComponent, {
      width: '500px'
    });

  }
}
