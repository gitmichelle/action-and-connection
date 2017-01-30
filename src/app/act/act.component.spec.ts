/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ActComponent } from './act.component';

describe('ActComponent', () => {
  let component: ActComponent;
  let fixture: ComponentFixture<ActComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
