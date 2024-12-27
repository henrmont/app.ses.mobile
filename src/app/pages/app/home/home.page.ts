import { Component, OnInit } from '@angular/core';
import { IonNav } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { HomeIndexPage } from './home-index/home-index.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonNav]
})
export class HomePage implements OnInit {

  root = HomeIndexPage

  constructor(
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
