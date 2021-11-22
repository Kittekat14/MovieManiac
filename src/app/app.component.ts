import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';

@Component({
  selector: 'app-root', // where to put app.component.ts => <app-root> in index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MovieManiac';

  constructor(public dialog: MatDialog) { }

  // this is the function that will open the dialog after clickling signup button
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      width: '480px'
    });
  }

  valueForm = new FormGroup({
    input: new FormControl(),
    username: new FormControl()
  });

  // onSubmit() {
  //   console.log(this.valueForm.value);
  // }
}
