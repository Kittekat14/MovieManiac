import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';


//Declaring the api url that will provide data for the client app
const apiUrl = 'https://actor-inspector.herokuapp.com/';

@Injectable({
  providedIn: 'root', // to make component, where we're in, available in root level
})
export class FetchApiDataService {
  // Inject the HttpClient module to the constructor params:
  // This will provide HttpClient to the entire class, making it available via "this.http"
  constructor(private http: HttpClient) {
    this.http = http;
  } // inside { }: dependency injection

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status Code ${error.status}, ` + `Error Body: ${error.error}`
      );
    }
    return throwError('Something bad happened. Please try again later.');
  }

  // Non-typed response extraction
  private extractResponseData(res: any): any {
    const body = res;
    return body || {};
  }

  // Making Api Calls to all Api Endpoints:
  public userRegistration(userData: any): Observable<any> {
    console.log(userData);

    return this.http
      .post(apiUrl + 'users', userData)
      .pipe(catchError(this.handleError));
  }

  public userLogin(userData: any): Observable<any> {
    console.log(userData);
    
    return this.http
      .post(apiUrl + 'login', userData)
      .pipe(catchError(this.handleError));
  }

  getAllMovies(): Observable<any> {
    const token = localStorage.getItem('token');

    return this.http
      .get(apiUrl + 'movies', {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  getOneMovie(title: string): Observable<any> {
    const token = localStorage.getItem('token');

    return this.http
      .get(apiUrl + `movies/${title}`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  getOneDirector(apiUrl: string): Observable<any> {
    const token = localStorage.getItem('token');

    return this.http
      .get(apiUrl + 'directors/:name', {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  getOneGenre(apiUrl: string): Observable<any> {
    const token = localStorage.getItem('token');

    return this.http
      .get(apiUrl + 'genres/:name', {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  getUser(username: any): Observable<any> {
    const token = localStorage.getItem('token');

    return this.http
      .get(apiUrl + `users/${username}`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  editUser(username: string, userData: any): Observable<any> {
    // console.log(userData);
    const token = localStorage.getItem('token');
    // const user = JSON.parse(localStorage.getItem('user') || '');

    // const { username } = userData;
    // console.log(token);

    return this.http
      .put(apiUrl + `users/${username}`, userData, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  deleteUser(userData: any): Observable<any> {
    console.log(userData);
    const token = localStorage.getItem('token');
    const { username } = userData;
    console.log(token);

    return this.http
      .delete(apiUrl + `users/${username}`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  getAllFavorites(userData: any): Observable<any> {
    console.log(userData);
    const token = localStorage.getItem('token');
    const { username } = userData;

    return this.http
      .get(apiUrl + `users/${username}/favorites`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
  addToFavorites(userData: any, movieid: any): Observable<any> {
    console.log(userData);
    const token = localStorage.getItem('token');
    const { username } = userData;
    const { movieId } = movieid;

    return this.http
      .post(
        apiUrl + `users/${username}/favorites/${movieId}`,
        {},
        {
          headers: new HttpHeaders({
            Authorization: 'Bearer ' + token,
          }),
        }
      )
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
  removeFromFavorites(userData: any, movieid: any): Observable<any> {
    console.log(userData);
    const token = localStorage.getItem('token');
    const { username } = userData;
    const { movieId } = movieid;

    return this.http
      .delete(apiUrl + `users/${username}/favorites/${movieId}`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
}