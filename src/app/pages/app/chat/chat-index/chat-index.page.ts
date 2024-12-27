import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent, IonSegmentButton, IonLabel, IonSegment, IonSegmentView, IonSegmentContent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonRefresherContent, IonRefresher, IonIcon, IonList, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { eyeOffOutline, add } from 'ionicons/icons';
import { ChatItemComponent } from 'src/app/components/chat/chat-item/chat-item.component';
import { AppHeaderComponent } from 'src/app/layouts/app-layout/app-header/app-header.component';
import { ChatService } from 'src/app/services/chat.service';
import { environment } from 'src/environments/environment.development';

import Pusher from 'pusher-js';
const pusher = new Pusher(environment.pusherKey, { cluster: environment.pusherCluster });

@Component({
  selector: 'app-chat-index',
  templateUrl: './chat-index.page.html',
  styleUrls: ['./chat-index.page.scss'],
  standalone: true,
  imports: [
    IonFab,
    IonFabButton,
    IonIcon,
    IonList,
    IonRefresher,
    IonRefresherContent,
    IonButtons,
    IonMenuButton,
    IonLabel,
    IonSegmentButton,
    IonContent,
    IonSegment,
    IonSegmentView,
    IonSegmentContent,
    IonHeader,
    IonToolbar,
    AppHeaderComponent,
    ChatItemComponent,
  ]
})
export class ChatIndexPage implements OnInit {

  chats: any
  pendingChats: any

  constructor(
    public route: ActivatedRoute,
    private chatService: ChatService
  ) {
    addIcons({ eyeOffOutline, add })
  }

  ngOnInit() {
    this.getChats()
    this.getPendingChats()
  }

  // chats
  getChats() {
    this.chatService.getChats().subscribe({
      next: (response) => {
        this.chats = response
      }
    })
  }

  // pending chats
  getPendingChats() {
    this.chatService.getPendingChats().subscribe({
      next: (response) => {
        this.pendingChats = response
      }
    })
  }

  // pull to refresh
  handleRefresh(event: any) {
    setTimeout(() => {
      this.getChats()
      this.getPendingChats()
      event.target.complete();
    }, 2000);
  }

}
