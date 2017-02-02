import { Component, OnInit} from '@angular/core';
import { NgModule }             from '@angular/core';
import { AuthGuard}   from '../auth.service';
import { AuthComponent } from './auth.component';
import { AuthDashboardComponent } from './auth-dashboard.component';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';
import { ActComponent } from '../act/act.component';
import { VolunteerComponent } from '../volunteer/volunteer.component';
import { ConnectComponent } from '../connect/connect.component';
import { AboutComponent } from '../about/about.component';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const authRoutes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    canActivate: [AuthGuard],

    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'act', component: ActComponent },
          { path: 'volunteer', component: VolunteerComponent },
          { path: 'connect', component: ConnectComponent },
          { path: '', component: AuthDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {}
