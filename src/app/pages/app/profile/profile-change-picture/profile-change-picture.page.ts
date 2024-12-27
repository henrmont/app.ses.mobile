import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-profile-change-picture',
  templateUrl: './profile-change-picture.page.html',
  styleUrls: ['./profile-change-picture.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ProfileChangePicturePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
