import { Component, OnInit } from '@angular/core';
import { IonNav } from '@ionic/angular/standalone';
import { NotificationsIndexPage } from './notifications-index/notifications-index.page';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
  standalone: true,
  imports: [IonNav]
})
export class NotificationsPage implements OnInit {

  root = NotificationsIndexPage

  constructor() { }

  ngOnInit() {
  }

}
