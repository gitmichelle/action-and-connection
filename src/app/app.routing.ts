import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActComponent } from './act/act.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { ConnectComponent } from './connect/connect.component';
import { AboutComponent } from './about/about.component';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'act',
    component: ActComponent
  },
  {
    path: 'volunteer',
    component: VolunteerComponent
  },
  {
    path: 'connect',
    component: ConnectComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
