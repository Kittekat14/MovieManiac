import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-one-movie',
  templateUrl: './one-movie.component.html',
  styleUrls: ['./one-movie.component.scss'],
})
export class OneMovieComponent implements OnInit {

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<OneMovieComponent>,
    public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA)
    public movieData: {
      title: string;
      description: string;
      year: number;
      genre: any;
      director: any;
      actors: [];
    }
  ) {}

  ngOnInit(): void {}

  // This is the function responsible for sending the form inputs to the backend
  showMovie(): void {
    this.fetchApiData.getOneMovie(this.movieData.title).subscribe(
      (result) => {
        this.movieData = result;
        return this.movieData;
      },
      (result) => {
        this.snackBar.open(result, 'OK', {
          duration: 2000,
        });
      }
    );
  }
}
