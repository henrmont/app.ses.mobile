import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonItemOption, IonItemOptions, IonIcon, IonItemSliding, IonAvatar, IonItem, IonInput, IonButton, IonButtons, IonModal, IonHeader, IonContent, IonToolbar, IonTitle, IonLabel, IonChip, IonActionSheet, IonFooter, IonTextarea, IonText, IonNote } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { arrowBackSharp, ellipsisVertical, send, close } from 'ionicons/icons';
import { environment } from 'src/environments/environment.development';

import Pusher from 'pusher-js';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChatService } from 'src/app/services/chat.service';
const pusher = new Pusher(environment.pusherKey, { cluster: environment.pusherCluster });

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.scss'],
  standalone: true,
  imports: [
    IonNote,
    IonText,
    IonTextarea,
    IonActionSheet,
    IonFooter,
    IonLabel,
    IonChip,
    IonContent,
    IonButtons,
    IonButton,
    IonInput,
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonItemSliding,
    IonIcon,
    IonItemOptions,
    IonItemOption,
    IonAvatar,
    IonItem,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ChatItemComponent  implements OnInit {

  @Input() chat: any
  @ViewChild('content') private content!: IonContent
  user = this.route.snapshot.firstChild?.data['user']
  channel: any

  formulario: FormGroup = this.formBuilder.group({
    chat_id: [null, [Validators.required]],
    message: [null],
  })

  constructor(
    public route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private chatService: ChatService
  ) {
    addIcons({ arrowBackSharp, ellipsisVertical, send, close })
    // this.channel = pusher.subscribe('chat.'+this.chat.id);
    // this.channel.bind('App\\Events\\ChatEvent', () => {
    //   console.log('teste')
    // })
  }

  ngOnInit() {
    console.log(this.chat)
    this.formulario.patchValue({
      chat_id: this.chat.id,
    })
    this.channel = pusher.subscribe('chat.'+this.chat.id);
    this.channel.bind('App\\Events\\ChatEvent', () => {
      this.chatService.getChat(this.chat.id).subscribe({
        next: (response) => {
          this.chat = response
        },
        complete: () => {
          setTimeout(() => {
            this.content.scrollToBottom();
          }, 100);
        }
      })
    })
  }

  // modal open
  isModalOpen = false;
  setModalOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
    setTimeout(() => {
        this.content.scrollToBottom();
    }, 100);
  }

  // submit form
  onSubmit(): any {
    this.chatService.registerMessage(this.formulario.value).subscribe({
      next: (response) => {
        this.formulario.patchValue({
          message: null,
        })
      },
      error: (error) => {
      },
      complete: () => {
      }
    })
  }

}
