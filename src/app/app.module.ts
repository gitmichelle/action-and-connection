import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActComponent } from './act/act.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { ConnectComponent } from './connect/connect.component';
import { AboutComponent } from './about/about.component';
import { masterFirebaseConfig } from './api-keys';
// import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule }  from './auth/auth.module';
import { AppRoutingModule }        from './app-routing.module';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { AuthGuard } from './auth.service';
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'
import { EmailComponent } from './email/email.component'
import { MembersComponent } from './members/members.component'

const appRoutes: Routes = [
  {
    path: 'act', component: ActComponent
  },
  {
    path: 'volunteer', component: VolunteerComponent
  },
  {
    path: 'connect', component: ConnectComponent
  },
]

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActComponent,
    VolunteerComponent,
    ConnectComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    EmailComponent,
    MembersComponent,
    // AuthComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AuthModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    AppRoutingModule,


  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {

  // Diagnostic only: inspect router configuration

  // constructor(router: Router) {
  //   console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  // }
}
