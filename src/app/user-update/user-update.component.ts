import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    @Inject(MAT_DIALOG_DATA)
    public data: { onSuccess: () => void },
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserUpdateComponent>,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  changeUser(): void {
    this.fetchApiData
      .editUser(this.user.username, this.userData)
      .subscribe((res) => {
        this.dialogRef.close();
        //updating the localStorage with the updated user
        localStorage.setItem('user', JSON.stringify(res));
        this.snackBar.open('You successfully updated your profile!', 'OK', {
          duration: 2000,
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      });
  }
}
