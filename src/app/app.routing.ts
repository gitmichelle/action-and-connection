import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActComponent } from './act/act.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { ConnectComponent } from './connect/connect.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';

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
<<<<<<< HEAD
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login-email', component: EmailComponent },
  { path: 'members', component: MembersComponent, canActivate:  [AuthGuard] }
=======
  {
    path: 'admin',
    component: AdminComponent
  }
>>>>>>> master
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
