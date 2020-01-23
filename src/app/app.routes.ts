import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HomeComponent} from './pages/home/home.component';
import {ErrorComponent} from './pages/error/error.component';
import {CarComponent} from "./pages/car/car.component";
import {UserComponent} from "./pages/user/user.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cars',
    component: CarComponent
  },
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
