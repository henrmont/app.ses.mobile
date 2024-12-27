import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { AppHeaderComponent } from 'src/app/layouts/app-layout/app-header/app-header.component';

@Component({
  selector: 'app-apps-index',
  templateUrl: './apps-index.page.html',
  styleUrls: ['./apps-index.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    AppHeaderComponent
  ]
})
export class AppsIndexPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
