import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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

  token = localStorage.getItem('token');

  constructor(
    public fetchApiData: FetchApiDataService,
    public router: Router,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  changeUser(): void {
    this.fetchApiData.editUser(this.userData.username, this.userData).subscribe(
      (response) => {
        localStorage.setItem('user', JSON.stringify(response));
        localStorage.setItem('token', response.token);
        //localStorage.setItem('user', JSON.stringify(response.user));
                //localStorage.setItem('user', JSON.stringify(response));
      setTimeout(() => {
        window.location.reload();
      }, 2000);      
    },
      (result) => {
        this.snackBar.open(result, 'OK', {
          duration: 3000,
        });
      }
    );
  }
}
