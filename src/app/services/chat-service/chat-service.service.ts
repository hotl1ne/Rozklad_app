import { Injectable } from '@angular/core';
import { ChatModel } from 'src/app/interfaces/IChat.module';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  chats: ChatModel[] = [
    {
      userId: '1',
      chats: ["Григорій Злобін", "Фургала Юрій", "Шувар Роман"],
      toUserMessage: ["Доброго дня, будь ласка, відвідуйте заняття та здавайте лабораторні роботи!", "Відвідайте деканат!", "Добрий день, завтра захист курсових робіт!"],
      fromUserMessage: []
    }
  ]

  constructor() { }

  getChats() {
    const user = localStorage.getItem("user");
    if (user) {
      const userJson = JSON.parse(user);
      const id = userJson.id;
      const userChat = this.chats.find(entry => entry.userId === id);
      if (userChat) {
        console.log(userChat);
        return userChat;
      }
    }
    return null;
  }
}
