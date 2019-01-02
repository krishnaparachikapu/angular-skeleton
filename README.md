# AngularSkeleton

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Additional info 
Project supports the angular routing. Samples routes can be found in app-routing.modules.ts file.
More routes can be added by referring samples routes.

Project consists of all the basic interceptors(auth-http-interceptor,http-response-interceptor,http-cache-interceptor) required for an enterperise application. All the interceptors can be found in app/common/services folder.

auth-http-interceptor can be used to authenticate http requests.the authentication logics can be written in this file.
  
http-response-interceptor can be used to intercept http response and can manipulate the response based on the requirement.
  
http-cache-interceptor can be used to cache the http responses for all requests listed in CACHE_API_LIST. http-cache-service can be used to retrieve the cache data.

Project also supports the state management using ngrx/store (RxJS powered state management for Angular applications, inspired by Redux). Sample actions and reducers can be found inside app/common/store folder. Store service can be used to retrieve & update the application state. Index.ts file inside the store folder can be used to defined the Appstate  and actionreducers mapper.

To get more help on ngrx/store go and checkout https://ngrx.io/guide/store.













