import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { OneMovieComponent } from './one-movie/one-movie.component';
import { DirectorComponent } from './director/director.component';
import { GenreComponent } from './genre/genre.component';
import { ProfileComponent } from './profile/profile.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'movies', component: AllMoviesComponent },
  { path: 'details', component: AllMoviesComponent },
  { path: 'genres', component: AllMoviesComponent },
  { path: 'directors', component: AllMoviesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: 'movies', pathMatch: 'prefix' },
  { path: '**', component: WelcomePageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationFormComponent,
    UserLoginFormComponent,
    AllMoviesComponent,
    WelcomePageComponent,
    OneMovieComponent,
    DirectorComponent,
    GenreComponent,
    ProfileComponent,
    NavbarComponent,
    UserUpdateComponent,
    UserDeleteComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule, // responsible for the DOM and needed for Web Applications (not Mobile/Desktop)
    HttpClientModule, // responsible for http requests
    AppRoutingModule, // responsible for Routing
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatIconModule,
    MatListModule,
    MatGridListModule
    
  ],
  exports: [RouterModule],
  providers: [], // to declare another provider other than root-app
  bootstrap: [AppComponent],
})
export class AppModule {}
