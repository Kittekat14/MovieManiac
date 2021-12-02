import { Component, OnInit, Input } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input() userData: any = {};

  constructor(
    public fetchApiData: FetchApiDataService,
    public router: Router,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.showUser();
  }

  /**
   * the function responsible for calling getUser function in fetchDataApi file
   *
   */
  showUser(): void {
    let user = JSON.parse(localStorage.getItem('user') || '');
    this.fetchApiData.getUser(user.username).subscribe((res: any) => {
      this.userData = res;
      return this.userData;
    });
  }
  /**
   * the function responsible for removing favorite movie in profile by click on remove button
   * @param movieid
   * @param title
   */
  removeFavorite(movieid: string, title: string): void {
    let user = JSON.parse(localStorage.getItem('user') || '');
    this.fetchApiData
      .removeFromFavorites(user.username, movieid)
      .subscribe((resp: any) => {
        this.snackBar.open(
          `${title} has been removed from your list of favorites.`,
          'OK',
          {
            duration: 3000,
          }
        );
        this.ngOnInit();
      });
  }
}
