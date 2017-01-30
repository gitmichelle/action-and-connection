import { Component, OnInit } from '@angular/core';
import { ActComponent } from '../act/act.component';
import { VolunteerComponent } from '../volunteer/volunteer.component';
import { ConnectComponent } from '../connect/connect.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
