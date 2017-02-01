import { Component, OnInit} from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ConnectComponent } from '../connect/connect.component';
import { VolunteerComponent } from '../volunteer/volunteer.component';
import { AboutComponent } from '../about/about.component';
import { Meetup } from '../meetup.model';
import { MeetupService } from '../meetup.service';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-act',
  templateUrl: './act.component.html',
  styleUrls: ['./act.component.scss'],
  providers: [MeetupService]
})
export class ActComponent implements OnInit {
  issues: FirebaseListObservable<any[]>;

  constructor(private router: Router, private meetupService: MeetupService){}

  ngOnInit() {
    this.issues = this.meetupService.getIssue();
  }

}
