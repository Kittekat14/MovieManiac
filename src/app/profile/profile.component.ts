import { Component, OnInit, Input } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  @Input() userData: any = {};

  constructor(
    public fetchApiData: FetchApiDataService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.showUser();
  }

  // Here there should be the function that calls getUser function in fetchDataApi file
  showUser(): void {
    let user = JSON.parse(localStorage.getItem('user') || '');
    this.fetchApiData.getUser(user.username).subscribe((res: any) => {
      this.userData = res;
      return this.userData;
    });
  }
}
