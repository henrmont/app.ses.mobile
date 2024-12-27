import { Component, OnInit } from '@angular/core';
import { IonNav } from '@ionic/angular/standalone';
import { LoginPage } from './login/login.page';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [IonNav]
})
export class AuthPage implements OnInit {

  index = LoginPage

  constructor() { }

  ngOnInit() {
  }

}
