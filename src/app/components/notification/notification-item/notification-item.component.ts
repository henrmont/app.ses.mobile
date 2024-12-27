import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonItem, IonItemSliding, IonAvatar, IonItemOption, IonItemOptions } from '@ionic/angular/standalone';

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss'],
  standalone: true,
  imports: [
    IonItem,
    IonItemSliding,
    IonAvatar,
    IonItemOption,
    IonItemOptions,
  ]
})
export class NotificationItemComponent  implements OnInit {

  @Input() notification: any
  @Output() removeNotificationEvent = new EventEmitter<any>;

  constructor() { }

  ngOnInit() {
  }

  // remove event to parent
  removeNotification(item: any) {
    item.getSlidingRatio().then((res: any) => {
      if (res == -1) {
        item.close()
        this.removeNotificationEvent.emit(this.notification)
      }
    })
  }

}
