import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ActComponent } from '../act/act.component';
import { VolunteerComponent } from '../volunteer/volunteer.component';
import { AboutComponent } from '../about/about.component';
import { Meetup } from '../meetup.model';
import { MeetupService } from '../meetup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css'],
  providers: [MeetupService]
})
export class ConnectComponent implements OnInit {
  meetups: Meetup[]

  constructor(private route: ActivatedRoute, private router: Router, private meetupService: MeetupService){}

  ngOnInit(){
    this.meetups = this.meetupService.getMeetups();
  }

};
