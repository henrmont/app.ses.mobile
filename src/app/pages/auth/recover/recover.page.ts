import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonNav, IonInput, IonButton, IonNavLink, IonContent, IonToast } from '@ionic/angular/standalone';
import { AuthService } from 'src/app/services/auth.service';
import { RecoverVerificationPage } from '../recover-verification/recover-verification.page';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.page.html',
  styleUrls: ['./recover.page.scss'],
  standalone: true,
  imports: [
    IonInput,
    IonButton,
    IonNavLink,
    IonToast,
    IonContent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RecoverPage implements OnInit {

  recover_verification = RecoverVerificationPage

  formulario: FormGroup = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
  })

  constructor(
    private formBuilder: FormBuilder,
    private nav: IonNav,
    private authService: AuthService
  ) {}

  ngOnInit() {
  }

  // toast message
  isToastOpen: boolean = false;
  toastMessage: string = ''
  setToastOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  // submit form
  onSubmit(): any {
    this.authService.resend(this.formulario.value).subscribe({
      next: (response) => {
        this.toastMessage = response.message
        this.setToastOpen(true)
      },
      error: (error) => {
        this.toastMessage = error.error.message
        this.setToastOpen(true)
      },
      complete: () => {
        this.nav.push(this.recover_verification, {
          email: this.formulario.get('email')?.value
        })
      }
    })
  }

}
