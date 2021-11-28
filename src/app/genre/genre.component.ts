import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss'],
})
export class GenreComponent implements OnInit {
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<GenreComponent>,
    public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA)
    public genreData: {
      name: string,
      description: string
    }
  ) {}

  ngOnInit(): void {}

  showGenre(): void {
    this.fetchApiData.getOneGenre(this.genreData.name).subscribe(
      (result) => {
        this.genreData = result;
        return this.genreData;
      },
      (result) => {
        this.snackBar.open(result, 'OK', {
          duration: 2000,
        });
      }
    );

  }
  
}
