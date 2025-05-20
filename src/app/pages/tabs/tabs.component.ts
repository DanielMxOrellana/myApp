import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, NavController } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-tabs',
  imports: [CommonModule, IonicModule, RouterModule],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Tabs</ion-title>
        <ion-buttons slot="end">
          <ion-button (click)="logout()">Logout</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <p>Bienvenido a la página principal.</p>
    </ion-content>
  `
})
export class TabsComponent {
  constructor(private navCtrl: NavController) {}

  logout() {
    localStorage.removeItem('token');
    this.navCtrl.navigateRoot('/auth');
  }
}
