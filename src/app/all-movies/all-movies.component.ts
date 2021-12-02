import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FetchApiDataService } from '../fetch-api-data.service';
import { OneMovieComponent } from '../one-movie/one-movie.component';
import { DirectorComponent } from '../director/director.component';
import { GenreComponent } from '../genre/genre.component';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss'],
})
export class AllMoviesComponent implements OnInit {
  user: any = JSON.parse(localStorage.getItem('user') || '');
  movies: any[] = [];
  favorites: any[] = this.user.favorites;

  /**
   * function that sees if movieid is "some"where in array of favorites
   * @param id
   */
  isFav(id: any): boolean {
    return this.favorites.some((fav) => fav._id === id);
  }
  /**
   * function toggles favorite status depending on if it already is in favorites array or not
   * @param movie
   */
  toggleFavs(movie: any): void {
    this.isFav(movie._id)
      ? this.removeFavorite(movie._id, movie.title)
      : this.addToFavs(movie._id, movie.title);
  }

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getMovies();
    this.getFavorites();
  }

  /**
   * function responsible for fetching all movies from backend
   */
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      return this.movies;
    });
  }

  /**
   * function responsible for fetching user's favorites from backend
   */
  getFavorites(): void {
    this.fetchApiData.getUser(this.user.username).subscribe((res: any) => {
      this.favorites = res.favorites;
      return this.favorites;
    });
  }

  /**
   * function responsible for adding movies to favorites array in backend
   * @param movieid
   * @param title
   */
  addToFavs(movieid: string, title: string): void {
    this.fetchApiData
      .addToFavorites(this.user.username, movieid)
      .subscribe((resp: any) => {
        this.snackBar.open(`${title} has been added to your favorites.`, 'OK', {
          duration: 3000,
        });
        this.ngOnInit();
      });
    return this.getFavorites();
  }

  /**
   * function responsible for removing movies from favorites array in backend
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

  /**
   * Function that will open the MovieDetails dialog window
   * @param title
   * @param description
   * @param year
   * @param genre
   * @param director
   * @param actors
   */
  openMovieDialog(
    title: string,
    description: string,
    year: number,
    genre: string,
    director: string,
    actors: []
  ): void {
    this.dialog.open(OneMovieComponent, {
      data: {
        title,
        description,
        year,
        genre,
        director,
        actors,
      },
      width: '500px',
    });
  }

  /**
   * Function that will open the Director dialog window
   * @param name
   * @param bio
   * @param birthyear
   */
  openDirectorDialog(name: string, bio: string, birthyear: number): void {
    this.dialog.open(DirectorComponent, {
      data: {
        name,
        bio,
        birthyear,
      },
      width: '500px',
    });
  }

  /**
   * Function that will open the Genre dialog window
   * @param name
   * @param description
   */
  openGenreDialog(name: string, description: string): void {
    this.dialog.open(GenreComponent, {
      data: {
        name,
        description,
      },
      width: '500px',
    });
  }
}
