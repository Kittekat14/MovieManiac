import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss'],
})
export class UserUpdateComponent implements OnInit {
  user: any = JSON.parse(localStorage.getItem('user') || '');

  @Input() userData = {
    username: this.user.username,
    password: '',
    email: this.user.email,
    birthdate: this.user.birthdate,
  };

  constructor(
    public fetchApiData: FetchApiDataService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  /**
   * function responsible for updating user data and sending it to backend
   */
  changeUser(): void {
    this.fetchApiData.editUser(this.user.username, this.userData).subscribe(
      (res) => {
        /** updating the localStorage with the updated user
         *
         */
        localStorage.setItem('user', JSON.stringify(res));
        this.snackBar.open('You successfully updated your profile!', 'OK', {
          duration: 2000,
        });
        /** taking time for window to reload
         * 
         */
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      },
      (res) => {
        this.snackBar.open(res, 'OK', {
          duration: 3000,
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    );
  }
}
