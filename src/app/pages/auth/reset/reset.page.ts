import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonNav, IonInput, IonToast, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonNavLink } from '@ionic/angular/standalone';
import { NavParams } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
  standalone: true,
  imports: [
    IonNavLink,
    IonInput,
    IonToast,
    IonButton,
    IonContent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ResetPage implements OnInit {

  root = LoginPage

  formulario: FormGroup = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6)]],
    cpassword: [null, [Validators.required, Validators.minLength(6)]]
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

  // check password equals
  isValidPassword: boolean = false
  checkPassword() {
    if (this.formulario.get('password')?.value == this.formulario.get('cpassword')?.value) {
      this.isValidPassword = true
    } else {
      this.isValidPassword = false
    }
  }

  // toast message
  isToastOpen: boolean = false
  toastMessage: string = ''
  setToastOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  // submit form
  onSubmit(): any {
    this.authService.reset(this.formulario.value).subscribe({
      next: (response) => {
        this.toastMessage = response.message
        this.setToastOpen(true)
      },
      error: (error) => {
        this.toastMessage = error.error.message
        this.setToastOpen(true)
      },
      complete: () => {
        this.nav.popToRoot()
      }
    })
  }

}
