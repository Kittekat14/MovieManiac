import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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
  movies: any[] = [];
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
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
