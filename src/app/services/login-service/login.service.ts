import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/interfaces/IUser.module';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private users: UserModel[] = [
    {
      id: "1", login: 'user1@gmail.com', password: 'password1',
      name: 'Шиян Владислав',
      phone: '+380931237632',
      faculty: 'Eлектроніки та комп`ютерних технологій',
      course: '3',
      group: 'ФеС-32',
      cafedra: 'Системного проектування'
    },
    {
      id: "2", login: 'user2@gmail.com', password: 'password2',
      name: 'Користувач Сайту',
      phone: '+1234567890',
      faculty: 'Eлектроніки та комп`ютерних технологій',
      course: '2',
      group: 'ФеС-21',
      cafedra: 'Загальна'
    }
  ];

  authenticate(username: string, password: string): boolean {
    const user = this.users.find(u => u.login === username && u.password === password);
    if(user)
      {
        localStorage.setItem("user", JSON.stringify(user));
      }
    return !!user; 
  }

}
