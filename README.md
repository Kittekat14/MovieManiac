# MovieManiac

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).
The app is written in **Angular 13**, with the help of **Node.js 16.13.0** and **npm (version 8)**. Starting with a user registration form and then getting past the login form, the user lands on the main page, where he can view movie cards and click on them to get more information. This single-page, responsive movie app is built with routing and several interface views. It supports the existing server-side (Movie-API, also on GitHub) by facilitating user requests and rendering the response from the server-side. The application is designed using **Angular Material (v13.0.2)**.

## Screenshots:

![responsive-on-Samsung-Galaxy-S10](https://user-images.githubusercontent.com/83455469/144748125-119c3bb0-3191-457b-b147-ae5035ac7cf9.PNG =100x20)
![responsive-on-iPhone](https://user-images.githubusercontent.com/83455469/144748126-bd6bb786-7f30-48f6-9125-98a437b16e7d.PNG =100x20)

![all-movies-component](https://user-images.githubusercontent.com/83455469/144748147-e4aef60a-06b9-4e5a-841a-4bfc36a66842.PNG)


## Other Technologies:

- Typedoc (comments in codebase)
- GitHub Pages (Hosting Service)

## User Stories:

- As a user, I want to be able to receive information on movies, directors, and genres so that I can learn more about movies I’ve watched or am interested in
- As a user, I want to be able to create a profile so I can save data about my favorite movies

## Features:

- The app displays a welcome view, where users will be able to either log in or register an account
- Once authenticated, the user can view all movies
- Upon clicking on a particular movie, users will be taken to a single movie view, where additional movie details will be displayed
- The single movie view contains buttons, that open dialogs containing details about the director, the genre and additional informations of a movie. On the movie synopsis card, there is also a button (heart-shaped), that lets the user add the movie to their list of favorite movies
- A user can also access his profile, where he can edit or delete his profile

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
