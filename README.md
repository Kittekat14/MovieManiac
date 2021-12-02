# MovieManiac

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.2.
The app is written in Angular 13, with the help of Node.js 16.13.0 and npm (version 8). Starting with a user registration form and then getting past the login form, the user lands on the main page, where he can view movie cards and click on them to get more information. This single-page, responsive movie app is built with routing and several interface views. It supports the existing server-side (Movie-API, also on GitHub) by facilitating user requests and rendering the response from the server-side. The application is designed using Angular Material (v13.0.2).

Other technologies:
- Typedoc (comments in codebase)
- GitHub Pages (Hosting Service)

Problems I faced:
-	Components have each different functionalities which you easily can get confused with and therefore must be very specific with your naming (e.g. of functions)
-	Typedoc wasn’t easy to implement, I had to name every entry point and couldn’t just name the folder where all the addressed files were

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
