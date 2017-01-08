import { Injectable } from '@angular/core';
import { moodLinePerDay } from './../mock/mood-line-per-day';

@Injectable()
export class MoodLinePerDayService {

  constructor() { }

  getMoodLinePerDay() {
    return moodLinePerDay;
  }

}
