import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-auth',
  imports: [CommonModule, IonicModule, RouterModule],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-button expand="full" (click)="login()">Login</ion-button>
    </ion-content>
  `
})
export class AuthComponent {
  login() {
    localStorage.setItem('token', 'fake-token');
    location.href = '/tabs'; // o usa NavController para mejor control
  }
}
