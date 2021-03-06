// import { Component } from '@angular/core';
import { setHours, setMinutes, isSameMonth } from 'date-fns';
// import { CalendarEvent } from 'angular-calendar';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';




import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';

import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  addHours
} from 'date-fns';

import { Subject } from 'rxjs';
import { Component, ViewChild, TemplateRef } from '@angular/core';  

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

let editEvents;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Organizacion Soporte Produccion';

  editEvents = false;

  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  view: string = 'month';

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      // subDays(startOfDay(new Date()), 0)
      start: subDays(startOfDay(new Date("August 1, 2018 00:00:00")), 0),
      end: new Date("August 1, 2018 23:59:59"),
      title: 'Cierre Contable Etapa 1 Julio*',
      color: colors.red,
      actions: this.actions
    },
    {
      // subDays(startOfDay(new Date()), 0)
      start: subDays(startOfDay(new Date("August 7, 2018 00:00:00")), 0),
      end: new Date("August 7, 2018 23:59:59"),
      title: 'Vencimiento Julio',
      color: colors.red,
      actions: this.actions
    },
    {
      // subDays(startOfDay(new Date()), 0)
      start: subDays(startOfDay(new Date("August 7, 2018 00:00:00")), 0),
      end: new Date("August 7, 2018 23:59:59"),
      title: 'Tablero Fisico*',
      color: colors.yellow,
      actions: this.actions
    },
    {
      // subDays(startOfDay(new Date()), 0)
      start: subDays(startOfDay(new Date("August 10, 2018 00:00:00")), 0),
      end: new Date("August 10, 2018 23:59:59"),
      title: 'Impuesto Sello Pampa*',
      color: colors.yellow,
      actions: this.actions
    },
    {
      // subDays(startOfDay(new Date()), 0)
      start: subDays(startOfDay(new Date("August 11, 2018 00:00:00")), 0),
      end: new Date("August 12, 2018 23:59:59"),
      title: 'Padron Riesgo*',
      color: colors.yellow,
      actions: this.actions
    },
    {
      // subDays(startOfDay(new Date()), 0)
      start: subDays(startOfDay(new Date("August 21, 2018 00:00:00")), 0),
      end: new Date("August 21, 2018 23:59:59"),
      title: 'Renovaciones',
      color: colors.blue,
      actions: this.actions
    },
    {
      // subDays(startOfDay(new Date()), 0)
      start: subDays(startOfDay(new Date("August 22, 2018 00:00:00")), 0),
      end: new Date("August 22, 2018 23:59:59"),
      title: 'Opeautos',
      color: colors.blue,
      actions: this.actions
    },
    {
      // subDays(startOfDay(new Date()), 0)
      start: subDays(startOfDay(new Date("August 23, 2018 00:00:00")), 0),
      end: new Date("August 26, 2018 23:59:59"),
      title: 'Cierre de Cartera',
      color: colors.red,
      actions: this.actions
    },
    {
      // subDays(startOfDay(new Date()), 0)
      start: subDays(startOfDay(new Date("August 27, 2018 00:00:00")), 0),
      end: new Date("August 31, 2018 23:59:59"),
      title: 'Envio Eresumen',
      color: colors.red,
      actions: this.actions
    },
    {
      // subDays(startOfDay(new Date()), 0)
      start: subDays(startOfDay(new Date("August 29, 2018 00:00:00")), 0),
      end: new Date("August 29, 2018 23:59:59"),
      title: 'Cierre Contable Et0*',
      color: colors.red,
      actions: this.actions
    },

    {
      // subDays(startOfDay(new Date()), 0)
      start: subDays(startOfDay(new Date("August 29, 2018 00:00:00")), 0),
      end: new Date("August 29, 2018 23:59:59"),
      title: 'Renovar Pass Visanet',
      color: colors.red,
      actions: this.actions
    }

    
    // {
    //   start: startOfDay(new Date()),
    //   title: 'An event with no end date',
    //   color: colors.yellow,
    //   actions: this.actions
    // },
    // {
    //   start: subDays(endOfMonth(new Date()), 3),
    //   end: addDays(endOfMonth(new Date()), 3),
    //   title: 'A long event that spans 2 months',
    //   color: colors.blue
    // },
    // {
    //   start: addHours(startOfDay(new Date()), 2),
    //   end: new Date(),
    //   title: 'A draggable and resizable event',
    //   color: colors.yellow,
    //   actions: this.actions,
    //   resizable: {
    //     beforeStart: true,
    //     afterEnd: true
    //   },
    //   draggable: true
    // }
  ];

  
  activeDayIsOpen: boolean = false;


  constructor(private modal: NgbModal) {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true; 
        this.viewDate = date;
      }
    }
  }
 

  // eventTimesChanged({
  //   event,
  //   newStart,
  //   newEnd
  // }: CalendarEventTimesChangedEvent): void {
  //   event.start = newStart;
  //   event.end = newEnd;
  //   this.handleEvent('Dropped or resized', event);
  //   this.refresh.next();
  // }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events.push({
      title: 'New event',
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });
    this.refresh.next();
  }

  openEditEvents(): void {
    this.editEvents = !this.editEvents;
  }

}

