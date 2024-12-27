import { Component, OnInit } from '@angular/core';
import { IonNav } from '@ionic/angular/standalone';
import { ChatIndexPage } from './chat-index/chat-index.page';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [IonNav]
})
export class ChatPage implements OnInit {

  root = ChatIndexPage

  constructor() { }

  ngOnInit() {
  }

}
