import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ActComponent } from './act/act.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { ConnectComponent } from './connect/connect.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
}
