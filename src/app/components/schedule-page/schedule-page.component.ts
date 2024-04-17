import { Component, OnInit } from '@angular/core';
import { Rozklad } from 'src/app/interfaces/IRozklad.module';
import { ScheduleService } from 'src/app/services/schedule-service/schedule.service';

@Component({
  selector: 'app-schedule-page',
  templateUrl: './schedule-page.component.html',
  styleUrls: ['./schedule-page.component.css']
})
export class SchedulePageComponent implements OnInit{

  schedule : Rozklad = {
    group: '',
    monday: {
      subject: []
    },
    tuesday: {
      subject: []
    },
    wednesday: {
      subject: []
    },
    thursday: {
      subject: []
    },
    friday: {
      subject: []
    }
  }

  constructor(private scheduleServ: ScheduleService) { }

  ngOnInit(): void {
    const schedule = this.scheduleServ.getSchedule();
    if(schedule)
      {
        this.schedule = schedule;
      }
    console.log(this.schedule);
  }

}
