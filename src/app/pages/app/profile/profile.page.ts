import { Component, OnInit } from '@angular/core';
import { IonNav } from '@ionic/angular/standalone';
import { ProfileIndexPage } from './profile-index/profile-index.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonNav]
})
export class ProfilePage implements OnInit {

  root = ProfileIndexPage

  constructor() { }

  ngOnInit() {
  }

}
