import { Injectable } from '@angular/core';
import { Meetup } from './meetup.model';
import { Issue } from './issue.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class MeetupService {
  volunteerEvents: FirebaseListObservable<any[]>;
  connectEvents: FirebaseListObservable<any[]>;
  issues: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.volunteerEvents = angularFire.database.list('volunteer');
    this.connectEvents = angularFire.database.list('connect');
  };

  getVolunteer() {
    return this.volunteerEvents;
  }

  getConnect() {
    return this.connectEvents;
  }

  getIssue() {
    return this.issues;
  }

  addConnect(newMeetup: Meetup) {
    this.connectEvents.push(newMeetup);
  }

  addVolunteer(newMeetup: Meetup) {
    this.volunteerEvents.push(newMeetup);
  }

  addIssue(newIssue: Issue) {
    this.issues.push(newIssue);
  }

}
