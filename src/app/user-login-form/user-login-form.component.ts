import { Component, OnInit, Input } from '@angular/core';
// You'll use this import to close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';

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
  @Input() userData = { username: '', password: '' };
  token = localStorage.getItem('token');

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  // This is the function responsible for sending the form inputs to the backend
  loginUser(token: any): void {
    this.fetchApiData.userLogin(this.userData).subscribe(
      (result) => {
        localStorage.setItem('token', token);
        console.log(token);

        // Logic for a successful user registration goes here! (To be implemented)
        this.dialogRef.close(); // This will close the modal on success!
        this.snackBar.open(`Hello ${this.userData.username}`, 'OK', {
          duration: 3000,
        });
      },
      (result) => {
        this.snackBar.open(result, 'OK', {
          duration: 3000,
        });
      }
    );
  }
}