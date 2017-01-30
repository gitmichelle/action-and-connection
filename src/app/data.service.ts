import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getData() {
    return this.http.get("https://api.meetup.com/find/events?photo-host=public&sig_id=210200631&fields=Movements&sig=bbae365c9f4b8279b562368d05331e625105a02f").subscribe(res => {console.log(res.json()); return <any[]> res.json();
    });
  }

}
