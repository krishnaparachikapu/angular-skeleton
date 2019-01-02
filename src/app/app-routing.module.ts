import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { URL_PATHS } from './common/common.constants';
import {UsersComponent} from './components/users/users.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  { path: URL_PATHS.HOME_PAGE, component: HomeComponent  },
  { path: URL_PATHS.USERS_PAGE, component: UsersComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
