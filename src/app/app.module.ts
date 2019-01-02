import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpCacheInterceptor } from './common/services/http-cache.interceptor';
import { HttpCacheService } from './common/services/http-cache.service';
import { HttpWrapperService } from './common/services/http-wrapper.service';
import { HttpResponseInterceptor } from './common/services/http-response.interceptor';
import { StoreModule } from '@ngrx/store';
import { reducers } from './common/store/reducers';
import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { initialState: loadInitialStoreState }),
  ],
  providers: [
    HttpCacheService,
    HttpWrapperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpResponseInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpCacheInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function loadInitialStoreState() {
  return {};
}
