import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-auth',
  imports: [CommonModule, IonicModule, RouterModule, FormsModule],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-list>
        <ion-item>
          <ion-label position="floating">Usuario:</ion-label>
          <ion-input [(ngModel)]="username" type="text"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Contraseña:</ion-label>
          <ion-input [(ngModel)]="password" type="password"></ion-input>
        </ion-item>
      </ion-list>

      <ion-button expand="full" (click)="login()">Iniciar Sesion</ion-button>
      <ion-text color="danger" *ngIf="errorMessage">{{ errorMessage }}</ion-text>

      <!-- Botones originales -->
      <ion-button expand="full" (click)="login()">Login</ion-button>
      <ion-button expand="full" color="secondary" (click)="goToSettings()">Settings</ion-button>
    </ion-content> 
  `
})
export class AuthComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  login() {
    if (this.username && this.password) {
      localStorage.setItem('token', 'fake-token');
      this.router.navigate(['/tabs']);
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Usuario y contraseña requeridos';
    }
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }
}