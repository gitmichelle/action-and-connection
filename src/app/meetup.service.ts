import { Injectable } from '@angular/core';
import { Meetup } from './meetup.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class MeetupService {
  meetups: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.meetups = angularFire.database.list('meetups');
  };

  getMeetups() {
    return this.meetups;
  }

}
