import { Injectable } from '@angular/core';
import { Meetup } from './meetup.model';
import { MEETUPS } from './meetup-sample';

@Injectable()
export class MeetupService {

  constructor() { }

  getMeetups() {
    return MEETUPS;
  }

}
