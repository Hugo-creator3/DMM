import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OverlayEventDetail } from '@ionic/core'; 
import { FormsModule } from '@angular/forms'; 




import { IonHeader, IonToolbar, IonTitle, IonContent, IonModal, IonButton, IonButtons, IonItem, IonInput, IonText, IonImg } from '@ionic/angular/standalone';
import { EMPTY, empty } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [RouterLink, IonHeader, IonToolbar, IonTitle, IonContent, IonModal, IonButton, IonButtons, IonText, IonImg, IonItem, IonInput,FormsModule],
})

export class HomePage {
 
    edad:number = 0;
    resultado: string = "";

    constructor(){
      
    }

  
    
    calcular(){
     
      {
      let edadCanina:number= this.edad*7;
      this.resultado="La edad canina de su mascota es de " + edadCanina+ " anios";
    }
  }
}