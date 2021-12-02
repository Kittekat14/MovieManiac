import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss'],
})
export class UserDeleteComponent implements OnInit {
  constructor(
    public fetchApiData: FetchApiDataService,
    public snackBar: MatSnackBar,
    public router: Router
  ) {}

  ngOnInit(): void {}

  /**
   * function responsible for deleting a user
   */
  deleteUser(): void {
    if (confirm('Are you sure you want to delete your profile?')) {
      localStorage.clear();
      this.router.navigate(['welcome']);
      this.snackBar.open('You successfully deleted your account', 'OK', {
        duration: 3000,
      });
    }
  }
}
