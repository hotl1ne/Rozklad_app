import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ChatModel } from 'src/app/interfaces/IChat.module';
import { ChatServiceService } from 'src/app/services/chat-service/chat-service.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit{

  messages: { text: string, type: string }[] = [];
  
  selected_ChatIndex: number = 0;

  selectedChat: ChatModel = {
    userId: '',
    chats: [],
    toUserMessage: [],
    fromUserMessage: []
  }

  chat: ChatModel = {
    userId: '',
    chats: [],
    toUserMessage: [],
    fromUserMessage: []
  }
  screenWidth: any;

  constructor(private getChat: ChatServiceService, private renderer: Renderer2, private elRef: ElementRef) {}

  sendMessage() {
    const messageInput = document.getElementById('message_input') as HTMLInputElement;
    const message = messageInput.value;
    this.messages.unshift({ text: message, type: 'user_message' });

    var id = localStorage.getItem("chatId");
    if (id) {
      var string = JSON.stringify(this.messages)

        localStorage.setItem(id, string);
    }
      console.log(this.messages);

    messageInput.value = '';
  }


  ngOnInit(): void {
    const checkChat = this.getChat.getChats();
    if(checkChat)
      {
        this.chat = checkChat;
      }
  }

  select_Chat(i: any)
  {
    localStorage.setItem("chatId", i);
    this.selectedChat = {
      userId: this.chat.userId,
      chats: this.chat.chats.length > 0 ? [this.chat.chats[i]] : [],
      toUserMessage: this.chat.toUserMessage.length > 0 ? [this.chat.toUserMessage[i]] : [],
      fromUserMessage: this.chat.fromUserMessage.length > 0 ? [this.chat.fromUserMessage[i]] : []
    };
    this.screenWidth = this.elRef.nativeElement.ownerDocument.defaultView.innerWidth;
    
    var id = localStorage.getItem("chatId");
    if (id) {
      const storedMessages = localStorage.getItem(id);
      if (storedMessages) {
        this.messages = JSON.parse(storedMessages);
      } else {
        this.messages = []; 
      }
    } else {
      this.messages = [];
    }
      console.log(this.messages);

    if(this.screenWidth <= 768)
      {
        var recentChats = document.getElementById('recent_chats');
        if(recentChats)
        {
        if (recentChats.style.display === 'none') {
          recentChats.style.display = 'flex';
        } else {
          recentChats.style.display = 'none';
        }
        }
      }
  }

  toggleRecentChats() {
    var recentChats = document.getElementById('recent_chats');
    if(recentChats)
      {
        if (recentChats.style.display === 'none') {
          recentChats.style.display = 'flex';
        } else {
          recentChats.style.display = 'none';
        }
      }
  }
}


