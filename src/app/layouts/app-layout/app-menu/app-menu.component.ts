import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonNote, IonItemDivider, IonList, IonItem, IonLabel, IonMenu, IonMenuToggle, IonIcon, IonContent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { informationCircleOutline, shieldCheckmarkOutline, personOutline, checkmarkCircle, warning, logOutOutline } from 'ionicons/icons';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment.development';

import Pusher from 'pusher-js';
const pusher = new Pusher(environment.pusherKey, { cluster: environment.pusherCluster });

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss'],
  standalone: true,
  imports: [
    IonNote,
    IonList,
    IonItem,
    IonItemDivider,
    IonLabel,
    IonMenu,
    IonMenuToggle,
    IonIcon,
    IonContent,
    RouterModule
  ]
})
export class AppMenuComponent  implements OnInit {

  channel: any
  user = this.route.snapshot.data['user']

  constructor(
    public route: ActivatedRoute,
    private authService: AuthService,
  ) {
    addIcons({ informationCircleOutline, shieldCheckmarkOutline, personOutline, checkmarkCircle, warning, logOutOutline })
    this.channel = pusher.subscribe('profile.'+this.user.id);
    this.channel.bind('App\\Events\\ProfileEvent', () => {
      this.getProfile()
    })
  }

  ngOnInit() {
  }

  // get profile data
  getProfile() {
    this.authService.me().subscribe({
      next: (response) => {
        this.user = response
      }
    })
  }

  // logout system
  logout() {
    this.authService.logout().subscribe({
      next: () => {
        window.localStorage.clear()
      },
      complete: () => {
        window.location.reload();
      }
    })
  }

}
