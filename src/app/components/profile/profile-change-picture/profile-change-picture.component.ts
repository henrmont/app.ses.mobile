import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonFab, IonFabButton, IonIcon, IonButton, IonModal, IonHeader, IonToolbar, IonButtons, IonTitle, IonContent } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { cameraOutline } from 'ionicons/icons';
import { ImageCroppedEvent, ImageCropperComponent, LoadedImage } from 'ngx-image-cropper';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-change-picture',
  templateUrl: './profile-change-picture.component.html',
  styleUrls: ['./profile-change-picture.component.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonTitle,
    IonButtons,
    IonToolbar,
    IonHeader,
    IonModal,
    IonButton,
    IonIcon,
    IonFabButton,
    IonFab,
    ImageCropperComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfileChangePictureComponent  implements OnInit {

  @Input() user: any
  @ViewChild('picture') picture!: ElementRef
  @Output() update = new EventEmitter<any>

  imageChangedEvent: any
  croppedImage: any

  formulario: FormGroup = this.formBuilder.group({
    picture: [null, [Validators.required]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private profileService: ProfileService,
  ) {
    addIcons({cameraOutline});
  }

  ngOnInit() {
  }

  selectPicture() {
    this.picture.nativeElement.click()
  }

  // modal open
  isModalOpen = false;
  setModalOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  fileChangeEvent(event: Event): void {
    this.imageChangedEvent = event
  }

  imageCropped(event: ImageCroppedEvent) {
    this.formulario.patchValue({picture:event.base64})
  }

  imageLoaded(image: LoadedImage) {
      // show cropper
  }

  cropperReady() {
      // cropper ready
  }

  loadImageFailed() {
      // show message
  }

  // submit form
  onSubmit() {
    this.profileService.setProfilePicture(this.formulario.value).subscribe({
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
