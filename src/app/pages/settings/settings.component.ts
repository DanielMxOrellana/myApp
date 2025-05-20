import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-settings',
  imports: [CommonModule, IonicModule, RouterModule],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Configuración</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-button expand="full" (click)="mostrarMensaje()">Presiona aquí</ion-button>
    </ion-content>
  `
})
export class SettingsComponent {
  mostrarMensaje() {
    alert('¡Has presionado el botón!');
  }
}
