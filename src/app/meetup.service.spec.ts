/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MeetupService } from './meetup.service';

describe('MeetupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeetupService]
    });
  });

  it('should ...', inject([MeetupService], (service: MeetupService) => {
    expect(service).toBeTruthy();
  }));
});
