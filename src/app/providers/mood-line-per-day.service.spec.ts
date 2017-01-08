/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MoodLinePerDayService } from './mood-line-per-day.service';

describe('MoodLinePerDayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoodLinePerDayService]
    });
  });

  it('should ...', inject([MoodLinePerDayService], (service: MoodLinePerDayService) => {
    expect(service).toBeTruthy();
  }));
});
