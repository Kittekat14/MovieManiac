import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss'],
})
export class UserRegistrationFormComponent implements OnInit {
  /**
   * The Input decorator binds the form input values to the userData object
   */
  @Input() userData = { username: '', password: '', email: '', birthdate: '' };

  constructor(
    public fetchApiData: FetchApiDataService,
    public router: Router,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  /** 
   * The function responsible for sending the form inputs to the backend 
   */
  registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe(
      (response) => {
        /**
         * Logic for a successful user registration
         * A snack bar element is shown, holding a message with the result of the operation.
         */
        this.dialogRef.close(); // This will close the modal on success
        this.snackBar.open(
          `You are now registered as ${this.userData.username} and can login!`,
          'OK',
          {
            duration: 3000,
          }
        );
      },
      (response) => {
        this.snackBar.open(response, 'OK', {
          duration: 3000,
        });
        setTimeout(function () {
          window.location.reload();
        }, 2000);
      }
    );
  }
}
