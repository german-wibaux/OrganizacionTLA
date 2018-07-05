import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, CalendarEvent } from 'angular-calendar';
import { setHours, setMinutes } from 'date-fns';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, CalendarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  view: string = 'day';

  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    {
      title: 'No event end date',
      start: setHours(setMinutes(new Date(), 0), 3),
      //color: colors.blue
    },
    {
      title: 'No event end date',
      start: setHours(setMinutes(new Date(), 0), 5),
      //color: colors.yellow
    }
  ];
}
