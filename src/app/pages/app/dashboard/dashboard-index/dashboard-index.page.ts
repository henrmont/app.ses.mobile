import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { AppHeaderComponent } from 'src/app/layouts/app-layout/app-header/app-header.component';

@Component({
  selector: 'app-dashboard-index',
  templateUrl: './dashboard-index.page.html',
  styleUrls: ['./dashboard-index.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    AppHeaderComponent
  ]
})
export class DashboardIndexPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
