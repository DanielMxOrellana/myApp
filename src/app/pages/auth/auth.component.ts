import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router } from '@angular/router';

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
      <ion-button expand="full" color="secondary" (click)="goToSettings()">Settings</ion-button>
    </ion-content>
  `
})
export class AuthComponent {
  constructor(private router: Router) {}

  login() {
    localStorage.setItem('token', 'fake-token');
    this.router.navigate(['/tabs']);
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }
}