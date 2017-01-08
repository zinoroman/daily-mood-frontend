import { Component, OnInit } from '@angular/core';
import { MoodLinePerDayService } from './../../providers/mood-line-per-day.service';
import { MoodLinePerDay } from './mood-line-per-day.interface';
import { MoodLineBallPerDay } from './mood-line-ball-per-day.inteface';

@Component({
  selector: 'app-mood-line-per-day',
  templateUrl: './mood-line-per-day.component.html',
  styleUrls: ['./mood-line-per-day.component.css']
})
export class MoodLinePerDayComponent implements OnInit {
  line: MoodLinePerDay;

  constructor(private moodLinePerDayService: MoodLinePerDayService) { }

  ngOnInit() {
    this.line = this.moodLinePerDayService.getMoodLinePerDay();
  }

}
