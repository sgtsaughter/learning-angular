import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import * as _ from "lodash";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messageText: string;
  messages: Array<any>;
  avatar: string = 'https://api.adorable.io/avatars/30/abott@adorable.png';
  selfAuthored: boolean = false;
  botMessage: string;

  constructor(private _socketService: SocketService) { }

  ngOnInit() {
    this.messages = new Array();
    this._socketService.on('message-received', (msg: any) => {
      this.messages.push(msg);
      console.log(msg);
      console.log(this.messages);
    });
  }

  sendMessage() {
    const message = {
      text: this.messageText,
      date: Date.now(),
      imageUrl: this.avatar,
      isBot: false
    };
    console.log(message);
    this._socketService.emit('send-message', message);
    this.messageText = '';
    this.chatBot();
  }

  chatBot() {
    const responseArray = [
      'GGWWWRGHH',
      'GGWWWRGHH',
      'AAARARRRGWWWH',
      'WWWWWWWGGGGHHHRRRRW',
      'WAGRRRRWWGAHHHHWWWRRGGAWWWWWWRR',
      'Aaaaaarrrrr rhhhnnn gggggrrrrr',
      'Rhhhnngggnn. Garrrrr!',
    ];

    const botMessage = _.sample(responseArray);
    console.log(botMessage)

    const message = {
      text: botMessage,
      date: Date.now(),
      imageUrl: '/src/app/images/chewbacca_icon.png',
      isBot: true
    };

    console.log(message);
    //Set a timeout to give the illusion that the bot is taking time to think of a response. 
    setTimeout(() => {
      this._socketService.emit('send-message', message);
    }, 2000)
  }

}
