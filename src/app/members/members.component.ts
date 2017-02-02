import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseObjectObservable } from 'angularfire2';
import { MeetupService } from '../meetup.service';
import { Meetup } from '../meetup.model';
import { Issue } from '../issue.model';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''},
  providers: [MeetupService]
})
export class MembersComponent implements OnInit {

  name: any;
    state: string = '';
    volunteerFormShow = false;
    connectFormShow = false;
    showButton = true;
    constructor(public af: AngularFire, private router: Router, private meetupService: MeetupService) {

      this.af.auth.subscribe(auth => {
        if(auth) {
          this.name = auth;
        }
      });

    }
    addVolunteer() {
    this.volunteerFormShow = true;
    this.showButton = false;
    }
    cancelForm() {
      this.volunteerFormShow = false;
      this.connectFormShow = false;
      this.showButton = true;
    }
    addConnect() {
    this.connectFormShow = true;
    this.showButton = false;
    }

    logout() {
       this.af.auth.logout();
       console.log('logged out');
       this.router.navigateByUrl('/login');
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

    ngOnInit() {
    }

  }
