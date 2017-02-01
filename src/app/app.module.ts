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
import { AngularFireModule } from 'angularfire2';
import { masterFirebaseConfig } from './api-keys';
// import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule }  from './auth/auth.module';
import { LoginRoutingModule }      from './login-routing.module';
import { LoginComponent }          from './login.component';
import { AppRoutingModule }        from './app-routing.module';

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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActComponent,
    VolunteerComponent,
    ConnectComponent,
    AboutComponent,
    // AuthComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AuthModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule,
    LoginRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  // Diagnostic only: inspect router configuration

  // constructor(router: Router) {
  //   console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  // }
}
