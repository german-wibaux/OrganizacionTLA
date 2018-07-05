import { Component } from '@angular/core';
import { setHours, setMinutes } from 'date-fns';
import { CalendarEvent } from 'angular-calendar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
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
