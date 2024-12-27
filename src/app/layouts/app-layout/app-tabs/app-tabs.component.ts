import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonBadge } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chatbubbles, notifications, home, apps, statsChart } from 'ionicons/icons';
import { environment } from 'src/environments/environment.development';
import { NotificationService } from 'src/app/services/notification.service';

import Pusher from 'pusher-js';
const pusher = new Pusher(environment.pusherKey, { cluster: environment.pusherCluster });

@Component({
  selector: 'app-app-tabs',
  templateUrl: './app-tabs.component.html',
  styleUrls: ['./app-tabs.component.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonBadge]
})
export class AppTabsComponent  implements OnInit {

  channel: any
  userId = this.route.snapshot.data['user'].id
  notificationsCount = 0


  constructor(
    public route: ActivatedRoute,
    private notificationService: NotificationService
  ) {
    addIcons({ notifications, chatbubbles, home, apps, statsChart })
    this.channel = pusher.subscribe('notification.'+this.userId);
    this.channel.bind('App\\Events\\NotificationEvent', () => {
      this.countNotifications()
    })
  }

  ngOnInit() {
    this.countNotifications()
  }

  // set unread notifications
  setUnreadNotifications() {
    this.notificationService.setUnreadNotificationsUser().subscribe()
    setTimeout(() => {
      this.notificationsCount = 0
    }, 1000)
  }

  // count number of notification
  countNotifications() {
    this.notificationService.getCountUnreadNotificationsUser().subscribe({
      next: (response) => {
        this.notificationsCount = response
      }
    })
  }

}
