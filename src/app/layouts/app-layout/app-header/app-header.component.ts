import { Component, Input, OnInit } from '@angular/core';
import { IonButtons, IonBackButton, IonMenuButton, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  standalone: true,
  imports: [
    IonMenuButton,
    IonButtons,
    IonBackButton,
    IonHeader,
    IonTitle,
    IonToolbar
  ]
})
export class AppHeaderComponent  implements OnInit {

  @Input() back: any
  @Input() title: string = ''

  constructor() { }

  ngOnInit() {}

}
