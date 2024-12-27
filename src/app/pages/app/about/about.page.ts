import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { AppHeaderComponent } from 'src/app/layouts/app-layout/app-header/app-header.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    AppHeaderComponent
  ]
})
export class AboutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
