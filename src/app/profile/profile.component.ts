import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  users: any[] = [];
  constructor(public fetchApiData: FetchApiDataService) {}

  ngOnInit(): void {
    this.getUser();
  }

  // Here there should be the function that calls getUser function in fetchDataApi file
  getUser(): void {
    let user = localStorage.getItem('user');

    this.fetchApiData.getUser(user).subscribe((res: any) => {
      this.users = res;
      console.log(this.users);
      return this.users;
    });
  }
}
