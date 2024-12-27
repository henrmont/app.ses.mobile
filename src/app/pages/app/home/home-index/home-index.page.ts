import { Component, OnInit } from '@angular/core';
import { IonRefresher, IonRefresherContent, IonContent, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { eyeOffOutline } from 'ionicons/icons';
import { HomeArticleComponent } from 'src/app/components/home/home-article/home-article.component';
import { AppHeaderComponent } from 'src/app/layouts/app-layout/app-header/app-header.component';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.page.html',
  styleUrls: ['./home-index.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonIcon,
    IonRefresher,
    IonRefresherContent,
    AppHeaderComponent,
    HomeArticleComponent
  ]
})
export class HomeIndexPage implements OnInit {

  articles: any

  constructor(
    private articleService: ArticleService
  ) {
    addIcons({ eyeOffOutline })
  }

  ngOnInit() {
    this.getArticles()
  }

  // get articles data
  getArticles() {
    this.articleService.getArticles().subscribe({
      next: (response) => {
        this.articles = response
      },
    })
  }

  // pull to refresh
  handleRefresh(event: any) {
    setTimeout(() => {
      this.getArticles()
      event.target.complete();
    }, 2000);
  }

}
