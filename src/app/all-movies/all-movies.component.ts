import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { FetchApiDataService } from '../fetch-api-data.service';
import { OneMovieComponent } from '../one-movie/one-movie.component';
import { DirectorComponent } from '../director/director.component';
import { GenreComponent } from '../genre/genre.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss'],
})
export class AllMoviesComponent implements OnInit {
  user: any = JSON.parse(localStorage.getItem('user') || '');
  movies: any[] = [];
  favorites: any[] = this.user.favorites; 

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getMovies();
    this.getFavorites();
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      return this.movies;
    });
  }
  
  getFavorites(): void {
    this.fetchApiData.getUser(this.user.username).subscribe((res: any) => {
      this.favorites = res.favorites;
      return this.favorites;
    });
  }


  addToFavs(movieid: string, title: string): void {

    this.fetchApiData.addToFavorites(this.user.username, movieid).subscribe((resp: any) => {
      this.snackBar.open(`${title} has been added to your favorites.`, 'OK', {
        duration: 3000,
      });
      this.ngOnInit();
    });
    return this.getFavorites();
  }
  


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
      width: '500px'
    });
  }

  openDirectorDialog(
    name: string,
    bio: string,
    birthyear: number
  ): void {
    this.dialog.open(DirectorComponent, {
      data: {
        name,
        bio,
        birthyear,
      },
      width: '500px',
    });
  }

  openGenreDialog(
    name: string,
    description: string
  ): void {
    this.dialog.open(GenreComponent, {
      data: {
        name,
        description
      },
      width: '500px',
    });
  }
}
