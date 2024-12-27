import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { AppHeaderComponent } from 'src/app/layouts/app-layout/app-header/app-header.component';

@Component({
  selector: 'app-admin-index',
  templateUrl: './admin-index.page.html',
  styleUrls: ['./admin-index.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    AppHeaderComponent
  ]
})
export class AdminIndexPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
