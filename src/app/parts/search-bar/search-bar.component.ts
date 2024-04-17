import { Component } from '@angular/core';
import { TeacherModel } from 'src/app/interfaces/ITeacher.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  teachers: Record<string, TeacherModel> = {
    "teacher1": { name: "Злобін Григорій", link: "https://electronics.lnu.edu.ua/employee/zlobin-h-h/" },
    "teacher2": { name: "Фургала Юрій", link: "https://electronics.lnu.edu.ua/employee/furhala-yurij-myhajlovych/" },
    "teacher3": {name: "Шувар Роман", link: "https://electronics.lnu.edu.ua/employee/shuvar-r-ya-2/"}
  };

  searchQuery: string = '';
  searchResults: TeacherModel[] = [];

  constructor() {}

  
  onInputChange() {
    this.searchResults = []; 
    if (this.searchQuery.trim() !== '') {
      for (const key in this.teachers) {
        if (this.teachers.hasOwnProperty(key)) {
          const teacher = this.teachers[key];
          if (teacher.name.toLowerCase().includes(this.searchQuery.toLowerCase())) {
            this.searchResults.push(teacher);
          }
        }
      }
    }
  }

}
