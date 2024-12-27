import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonModal, IonHeader, IonToolbar, IonButtons, IonContent, IonIcon, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonTitle, IonItemDivider, IonText } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { calendarOutline, arrowBackSharp } from 'ionicons/icons';

@Component({
  selector: 'app-home-article',
  templateUrl: './home-article.component.html',
  styleUrls: ['./home-article.component.scss'],
  standalone: true,
  imports: [IonText, IonItemDivider,
    IonTitle,
    IonModal,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonContent,
    IonIcon,
    IonLabel,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    CommonModule
  ]
})
export class HomeArticleComponent  implements OnInit {

  @Input() article: any

  constructor() {
    addIcons({calendarOutline, arrowBackSharp});
  }

  ngOnInit() {}

  // modal open
  isModalOpen = false;
  setModalOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}
