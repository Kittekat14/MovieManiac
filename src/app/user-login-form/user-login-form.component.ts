import { Component, OnInit, Input } from '@angular/core';
// You'll use this import to close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
// This import brings in the API calls we created in 6.2
import { FetchApiDataService } from '../fetch-api-data.service';

// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss'],
})
export class UserLoginFormComponent implements OnInit {
  /**
   * The Input decorator binds the form input values to the userData object
   */
  @Input() userData = { username: '', password: '' };
  token = localStorage.getItem('token');
  isLoggedIn = false;

  constructor(
    public fetchApiData: FetchApiDataService,
    public router: Router,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  /**
   * The function responsible for sending the form inputs to the backend
   * A snack bar element is shown, holding a message with the result of the operation.
   */
  loginUser(token: any): void {
    this.fetchApiData.userLogin(this.userData).subscribe(
      (response) => {
        /**
         * Logic for a successful user login
         */
        this.dialogRef.close();
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        this.dialogRef.close(); // This will close the modal on success!
        this.snackBar.open(`Hello ${this.userData.username}`, 'OK', {
          duration: 3000,
        });
        this.router.navigate(['movies']);
      },
      (result) => {
        this.snackBar.open(result, 'OK', {
          duration: 3000,
        });
      }
    );
  }
}
