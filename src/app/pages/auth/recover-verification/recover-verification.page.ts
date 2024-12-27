import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonNav, IonInput, IonNavLink, IonContent, IonHeader, IonTitle, IonToolbar, IonToast, IonButton } from '@ionic/angular/standalone';
import { NavParams } from '@ionic/angular';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoOptions } from '@maskito/core';
import { AuthService } from 'src/app/services/auth.service';
import { ResetPage } from '../reset/reset.page';

@Component({
  selector: 'app-recover-verification',
  templateUrl: './recover-verification.page.html',
  styleUrls: ['./recover-verification.page.scss'],
  standalone: true,
  imports: [
    IonInput,
    IonNavLink,
    IonButton,
    IonToast,
    IonContent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaskitoDirective,
  ]
})
export class RecoverVerificationPage implements OnInit {

  reset = ResetPage

  readonly maskitoOptions: MaskitoOptions = {
    mask: /^\d{1}$/,
  };

  formulario: FormGroup = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    one: ['', [Validators.required, Validators.maxLength(1), Validators.minLength(1)]],
    two: ['', [Validators.required, Validators.maxLength(1), Validators.minLength(1)]],
    three: ['', [Validators.required, Validators.maxLength(1), Validators.minLength(1)]],
    four: ['', [Validators.required, Validators.maxLength(1), Validators.minLength(1)]]
  })

  constructor(
    private formBuilder: FormBuilder,
    private nav: IonNav,
    private navParams: NavParams,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.formulario.patchValue({
      email: this.navParams.data['email']
    })
  }

  // toast message
  isToastOpen: boolean = false
  toastMessage: string = ''
  setToastOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  // submit form
  onSubmit(): any {
    this.authService.recover(this.formulario.value).subscribe({
      error: (error) => {
        this.toastMessage = error.error.message
        this.setToastOpen(true)
      },
      complete: () => {
        this.nav.push(this.reset, {
          email: this.formulario.get('email')?.value
        })
      }
    })
  }

}
