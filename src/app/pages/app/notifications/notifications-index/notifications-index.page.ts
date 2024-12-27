import { Component, OnInit } from '@angular/core';
import { IonRefresher, IonRefresherContent, IonContent, IonList, IonIcon } from '@ionic/angular/standalone';
import { notificationsOffOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { AppHeaderComponent } from 'src/app/layouts/app-layout/app-header/app-header.component';
import { NotificationItemComponent } from 'src/app/components/notification/notification-item/notification-item.component';
import { environment } from 'src/environments/environment.development';
import { NotificationService } from 'src/app/services/notification.service';
import { ActivatedRoute } from '@angular/router';

import Pusher from 'pusher-js';
const pusher = new Pusher(environment.pusherKey, { cluster: environment.pusherCluster });

@Component({
  selector: 'app-notifications-index',
  templateUrl: './notifications-index.page.html',
  styleUrls: ['./notifications-index.page.scss'],
  standalone: true,
  imports: [
    IonRefresher,
    IonRefresherContent,
    IonList,
    IonIcon,
    IonContent,
    AppHeaderComponent,
    NotificationItemComponent
  ]
})
export class NotificationsIndexPage implements OnInit {

  channel: any
  notifications: any = null
  userId = this.route.snapshot.parent?.data['user'].id

  constructor(
    private notificationService: NotificationService,
    private route: ActivatedRoute
  ) {
    addIcons({notificationsOffOutline});
    this.channel = pusher.subscribe('notification.'+this.userId);
    this.channel.bind('App\\Events\\NotificationEvent', () => {
      this.getNotifications()
    })
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getNotifications()
  }

  // pull to refresh
  handleRefresh(event: any) {
    setTimeout(() => {
      this.getNotifications()
      event.target.complete();
    }, 2000);
  }

  // get notifications data
  getNotifications() {
    this.notificationService.getNotificationsUser().subscribe({
      next: (response) => {
        this.notifications = response
      }
    })
  }

  // remove notification
  removeNotification(item: any) {
    this.notificationService.removeNotification(item.id).subscribe()
    let index: number = this.notifications.indexOf(item);
    if (index !== -1) {
      setTimeout(() => {
        this.notifications.splice(index, 1);
      }, 100)
    }
  }

}
