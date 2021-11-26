import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userData = { username: '', password: '', email: '', birthdate: '' };
  constructor(public fetchApiData: FetchApiDataService) {}

  ngOnInit(): void {
    this.showUser();
    this.getFavorites();
  }

  // Here there should be the function that calls getUser function in fetchDataApi file
  showUser(): void {
    this.fetchApiData.getUser(this.userData).subscribe((resp: any) => {
      this.userData = resp;
      console.log(this.userData);
      return this.userData;
    });
  }

  getFavorites() {}
}
