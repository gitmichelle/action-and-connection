import { Component, OnInit } from '@angular/core';
import { Meetup } from '../meetup.model';
import { Issue } from '../issue.model';
import { Router } from '@angular/router';
import { MeetupService } from '../meetup.service';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MeetupService]
})

export class AdminComponent implements OnInit {

  constructor(private meetupService: MeetupService)  { }

  ngOnInit() {
  }

  submitConnectEvent(image: string, title: string, date: string, time: string, location: string, detailedLocation: string, description: string, siteUrl: string) {
    var newMeetup: Meetup = new Meetup(image, title, date, time, location, detailedLocation, description, siteUrl);
    console.log(newMeetup);
     this.meetupService.addConnect(newMeetup);
  }

  submitVolunteerEvent(image: string, title: string, date: string, time: string, location: string, detailedLocation: string, description: string, siteUrl: string) {
    var newMeetup: Meetup = new Meetup(image, title, date, time, location, detailedLocation, description, siteUrl);
    console.log(newMeetup);
     this.meetupService.addVolunteer(newMeetup);
  }

}
