import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar'
@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.page.html',
  styleUrls: ['./horarios.page.scss'],
})
export class HorariosPage implements OnInit {

  date: string;
  type: 'string';

  optionsRange: CalendarComponentOptions = {
    monthFormat: 'YYYY MM',
    weekdays: ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'],
    weekStart: 1
  };
  constructor() {}

  onChange($event) {
    console.log($event);
  }
  ngOnInit() {
  }

}
