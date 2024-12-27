import { Component, OnInit } from '@angular/core';
import { IonNav } from '@ionic/angular/standalone';
import { AdminIndexPage } from './admin-index/admin-index.page';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
  standalone: true,
  imports: [IonNav]
})
export class AdminPage implements OnInit {

  root = AdminIndexPage

  constructor() { }

  ngOnInit() {
  }

}
