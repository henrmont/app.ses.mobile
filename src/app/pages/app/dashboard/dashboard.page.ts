import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonNav } from '@ionic/angular/standalone';
import { DashboardIndexPage } from './dashboard-index/dashboard-index.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonNav]
})
export class DashboardPage implements OnInit {

  root = DashboardIndexPage

  constructor() { }

  ngOnInit() {
  }

}
