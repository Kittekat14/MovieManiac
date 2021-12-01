import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';

/**
 * @constant apiUrl Declaring the api url that will provide data for the client app
 */
const apiUrl = 'https://actor-inspector.herokuapp.com/';

@Injectable({
  providedIn: 'root', // to make component, where we're in, available in root level
})
export class FetchApiDataService {
  /**
   *
   * @param http Inject the HttpClient module to the constructor params -->
   * This will provide HttpClient to the entire class, making it available via this.http
   */
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

  /**
   * Making Api Calls to all API Endpoints:
   * */
  /** the userRegistrationService:
   * method GET takes @param of userData
   * @returns the API endpoint (apiUrl + 'users')
   * */
  public userRegistration(userData: any): Observable<any> {
    return this.http
      .post(apiUrl + 'users', userData)
      .pipe(catchError(this.handleError));
  }
  /** the userLoginService:
   * method GET takes @param of userData
   * @returns the API endpoint (apiUrl + 'login')
   * */
  public userLogin(userData: any): Observable<any> {
    return this.http
      .post(apiUrl + 'login', userData)
      .pipe(catchError(this.handleError));
  }
  /** the fetchAllMoviesService:
   * @returns the API endpoint (apiUrl + 'movies')
   * */
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
  /** the fetchSingleMovieService:
   * takes @param of title (of movie)
   * @returns the API endpoint (apiUrl + 'movies/:title')
   * */
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
  /** the fetchSingleDirectorService:
   * takes @param of name (of director)
   * @returns the API endpoint (apiUrl + 'directors/:name')
   * */
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
  /** the fetchSingleGenreService:
   * takes @param name (of genre)
   * @returns the API endpoint (apiUrl + 'genres/:name')
   * */
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
  /** the fetchSingleUserService:
   * takes @param username (of user)
   * @returns the API endpoint (apiUrl + 'users/:username')
   * */
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
  /** the updateUserService:
   * takes @param username and @param newUserData that you want to change the existing data into
   * @returns the API endpoint (apiUrl + 'users/:username')
   * */
  editUser(username: string, newUserData: any): Observable<any> {
    const token = localStorage.getItem('token');

    return this.http
      .put(apiUrl + `users/${username}`, newUserData, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
  /** the deleteUserService:
   * takes @param username (of user you want to delete)
   * @returns the API endpoint (apiUrl + 'users/:username')
   * */
  deleteUser(username: string): Observable<any> {
    const token = localStorage.getItem('token');

    return this.http
      .delete(apiUrl + `users/${username}`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
  /** the fetchFavoritesService:
   * takes @param username (of user with specific favorites)
   * @returns the API endpoint (apiUrl + 'users/:username/favorites')
   * */
  getAllFavorites(username: string): Observable<any> {
    const token = localStorage.getItem('token');

    return this.http
      .get(apiUrl + `users/${username}/favorites`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  /**
   * the postToFavoritesService:
   * takes @param username (of user with specific favorites)
   * and @param movieid (of movie to add)
   * @returns the API endpoint (apiUrl + 'users/:username/favorites/:movieid')
   */
  addToFavorites(username: string, movieid: any): Observable<any> {
    const token = localStorage.getItem('token');

    return this.http
      .post(
        apiUrl + `users/${username}/favorites/${movieid}`,
        {},
        {
          headers: new HttpHeaders({
            Authorization: 'Bearer ' + token,
          }),
        }
      )
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }

  /**
   * the removeFromFavoritesService:
   * takes @param username (of user with specific favorites)
   * and @param movieid (of movie to remove)
   * @returns the API endpoint (apiUrl + 'users/:username/favorites/:movieid')
   */
  removeFromFavorites(username: string, movieid: any): Observable<any> {
    const token = localStorage.getItem('token');

    return this.http
      .delete(apiUrl + `users/${username}/favorites/${movieid}`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
}
