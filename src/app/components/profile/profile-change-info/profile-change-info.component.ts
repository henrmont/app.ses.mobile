import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonButton, IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonContent, IonIcon, IonInput, IonToast, IonFab, IonNavLink } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { arrowBackSharp } from 'ionicons/icons';
import { ProfileService } from 'src/app/services/profile.service';

const profileChannel = new BroadcastChannel('profile-channel');

@Component({
  selector: 'app-profile-change-info',
  templateUrl: './profile-change-info.component.html',
  styleUrls: ['./profile-change-info.component.scss'],
  standalone: true,
  imports: [IonNavLink, IonFab, IonToast,
    IonInput,
    IonIcon,
    IonContent,
    IonButtons,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonModal,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfileChangeInfoComponent  implements OnInit {

  @Input() user: any
  @Output() update = new EventEmitter<any>

  formulario: FormGroup = this.formBuilder.group({
    name: [null, [Validators.required]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private profileService: ProfileService
  ) {
    addIcons({arrowBackSharp});
  }

  ngOnInit() {
    this.formulario.patchValue({
      name: this.user.name,
    })
  }

  // modal open
  isModalOpen = false;
  setModalOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  // submit form
  onSubmit(): any {
    this.profileService.setProfileInfo(this.formulario.value).subscribe({
      next: (response) => {
        this.formulario.markAsPristine()
        this.update.emit(response)
      },
      error: (error) => {
      },
      complete: () => {
        this.setModalOpen(false)
      }
    })
  }

}
