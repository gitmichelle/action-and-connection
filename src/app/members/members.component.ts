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
    actFormShow = false;
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

    addConnect() {
    this.connectFormShow = true;
    this.showButton = false;
    }
    addIssue() {
    this.actFormShow = true;
    this.showButton = false;
    }
    cancelForm() {
      this.volunteerFormShow = false;
      this.connectFormShow = false;
      this.actFormShow = false;
      this.showButton = true;
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
       this.connectFormShow = false;
       this.showButton = true;
    }

    submitVolunteerEvent(image: string, title: string, date: string, time: string, location: string, detailedLocation: string, description: string, siteUrl: string) {
      var newMeetup: Meetup = new Meetup(image, title, date, time, location, detailedLocation, description, siteUrl);
      console.log(newMeetup);
       this.meetupService.addVolunteer(newMeetup);
       this.volunteerFormShow = false;
       this.showButton = true;
    }

    submitActEvent(image: string, issue: string, description: string, hyperlink: string, name: string, title: string, state: string, phone: string, email: string, address: string) {
      var newMeetup: Issue = new Issue(image, issue, description, hyperlink, name, title, state, phone, email, address);
      console.log(newMeetup);
       this.meetupService.addIssue(newMeetup);
       this.actFormShow = false;
       this.showButton = true;
    }

    ngOnInit() {
    }

  }
