/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MoodLinePerDayComponent } from './mood-line-per-day.component';

describe('MoodLinePerDayComponent', () => {
  let component: MoodLinePerDayComponent;
  let fixture: ComponentFixture<MoodLinePerDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoodLinePerDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodLinePerDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
