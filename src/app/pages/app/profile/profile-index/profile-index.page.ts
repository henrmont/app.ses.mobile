import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonToast, IonContent, IonIcon, IonFab, IonNavLink, IonFabButton } from '@ionic/angular/standalone';
import { AppHeaderComponent } from 'src/app/layouts/app-layout/app-header/app-header.component';
import { addIcons } from 'ionicons';
import { cameraOutline } from 'ionicons/icons';
import { ProfileChangeInfoComponent } from 'src/app/components/profile/profile-change-info/profile-change-info.component';
import { ProfileService } from 'src/app/services/profile.service';
import { ProfileChangePictureComponent } from 'src/app/components/profile/profile-change-picture/profile-change-picture.component';

@Component({
  selector: 'app-profile-index',
  templateUrl: './profile-index.page.html',
  styleUrls: ['./profile-index.page.scss'],
  standalone: true,
  imports: [
    IonToast,
    IonNavLink,
    IonFab,
    IonFabButton,
    IonIcon,
    IonContent,
    AppHeaderComponent,
    ProfileChangeInfoComponent,
    ProfileChangePictureComponent
  ],
})
export class ProfileIndexPage implements OnInit {

  user = this.route.snapshot.parent?.data['user']

  constructor(
    public route: ActivatedRoute,
    private profileService: ProfileService
  ) {
    addIcons({cameraOutline});
  }

  ngOnInit() {
  }

  // toast message
  isToastOpen: boolean = false;
  toastMessage: string = ''
  setToastOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  // get profile data
  getProfile() {
    this.profileService.getProfile().subscribe({
      next: (response) => {
        this.user = response
      }
    })
  }

  // update data
  updateProfile(event: any) {
    this.getProfile()
    this.toastMessage = event.message
    this.setToastOpen(true)
  }

}
