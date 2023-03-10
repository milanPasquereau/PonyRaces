import { HomeComponent } from './home/home.component';
import { RacesComponent } from './races/races.component';
import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'races', component: RacesComponent },
  { path: 'register', component: RegisterComponent }
];
