import { Component, OnInit } from '@angular/core';
import { IonNav } from '@ionic/angular/standalone';
import { AppsIndexPage } from './apps-index/apps-index.page';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.page.html',
  styleUrls: ['./apps.page.scss'],
  standalone: true,
  imports: [IonNav]
})
export class AppsPage implements OnInit {

  root = AppsIndexPage

  constructor() { }

  ngOnInit() {
  }

}
