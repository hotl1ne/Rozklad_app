import { group } from '@angular/animations';
import { Injectable } from '@angular/core';
import { Rozklad } from 'src/app/interfaces/IRozklad.module';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  schedule : Rozklad[] = [
    {
      group: 'ФеС-32',
      monday: {
        subject: ["", "", "ДВВС", "ДВВС", "Технології захисту інформації\nМонастирський Л.С", "Користувацькі інтерфейси\nЗлобін Г.Г", "Сучасні парадигми програмування\nПаночко Г.І", ""]
      },
      tuesday: {
        subject: ["", "", "Користувацькі інтерфейси\nЗлобін Г.Г (1)\n\nТехнології захисту інформації\nПавлик М.Р(2)", "Технології захисту інформації\nПавлик М.Р(1)\n\nКористувацькі інтерфейси\nЗлобін Г.Г (2)", "", "", "", ""]
      },
      wednesday: {
        subject: ["", "", "", "", "Сучасні парадигми програмування\nФранів В.А (2)", "Сучасні парадигми програмування\nФранів В.А (1)\n\nМобільна розробка\nЛевуш П.Н (2)", "Мобільна розробка\nКушнір О.О (1)", ""]
      },
      thursday: {
        subject: ["", "Системи глибиного навчання\nКаськун О.Д\n\nПрофесійний Python\nСвелеба С.А", "ДВВС", "ДВВС", "Мобільна розробка\nКушнір О.О", "Теорія автоматичного керування\nСоколовський Б.С", "", ""]
      },
      friday: {
        subject: ["", "", "Теорія автоматичного керування\nСоколовський Б.С (2)", "Професійний Python\nСвелеба С.А", "Системи глибиного навчання\nСтахіра Р.!", "Теорія автоматичного керування\nСоколовський Б.С (1)", "", ""]
      }
    }
  ]

  constructor() { }

  getSchedule() {
    const user = localStorage.getItem("user");
    if (user) {
      const userJson = JSON.parse(user);
      const group = userJson.group;
      const groupSchedule = this.schedule.find(entry => entry.group === group);
      if (groupSchedule) {
        console.log(groupSchedule);
        return groupSchedule;
      }
    }
    return null;
  }
}

