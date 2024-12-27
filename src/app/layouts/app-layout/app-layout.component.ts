import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular/standalone';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { AppTabsComponent } from './app-tabs/app-tabs.component';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
  standalone: true,
  imports: [
    IonRouterOutlet,
    AppMenuComponent,
    AppTabsComponent
  ]
})
export class AppLayoutComponent  implements OnInit {

  constructor(
    public route: ActivatedRoute,
  )  { }

  ngOnInit() {
  }

}
