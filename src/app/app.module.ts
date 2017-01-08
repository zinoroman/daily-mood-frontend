import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MoodLinePerDayComponent } from './components/mood-line-per-day/mood-line-per-day.component';

import { MoodLinePerDayService } from './providers/mood-line-per-day.service';

@NgModule({
  declarations: [
    AppComponent,
    MoodLinePerDayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MoodLinePerDayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
