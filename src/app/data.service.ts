import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class DataService {


  private jsonUrl = 'https://api.meetup.com/find/events?photo-host=public&sig_id=210200631&fields=Movements&sig=bbae365c9f4b8279b562368d05331e625105a02f'

  constructor(private http: Http) { }

  setData() {
    console.log("test")
  }

  getData() {
    return this.http.get(this.jsonUrl);
  }



  // private extractData(res: Response) {
  //   let body = res.json();
  //   console.log(body)
  //   return body.data || { };
  // }

}
