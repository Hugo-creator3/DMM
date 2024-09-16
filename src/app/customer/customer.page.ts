import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonCheckbox,  IonItemOption, IonPicker,IonSelectOption, IonPickerColumn, IonPickerColumnOption, IonToolbar, IonTitle, IonContent, IonModal, IonButton, IonButtons, IonItem, IonInput, IonText, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
  standalone: true,
  imports: [IonHeader, IonSelectOption,  CommonModule, IonToolbar, IonTitle, IonPickerColumn,IonPickerColumnOption, IonPicker, IonContent, IonModal, IonButton, IonButtons, IonText, IonImg, IonItem, IonInput,FormsModule]
})
export class CustomerPage  {
  cantidad: number = 0;
  monedaSeleccionada: string = '';
  resultado: number = 0;
  pesos: string="";

  // Tasas de conversión (ejemplo)
  tasas: any = {
    dolar: 20.13,
    euro: 22.23,  
    libra: 26.37  
  };

  monedaSeleccionadaChanged(event: any) {
    this.monedaSeleccionada = event.detail.value;
    console.log("Moneda seleccionada después del cambio:", this.monedaSeleccionada);
  }
  

  convertir() {
    console.log("Cantidad ingresada:", this.cantidad);
    console.log("Moneda seleccionada:", this.monedaSeleccionada);

    if (this.cantidad > 0 && this.monedaSeleccionada) {
      const tasaConversion = this.tasas[this.monedaSeleccionada];
      console.log("Tasa de conversión seleccionada:", tasaConversion);
      

      
      if (tasaConversion) {
        this.resultado = this.cantidad * tasaConversion;
      } else {
        this.resultado = 3; 
      }
    } else {
      this.resultado = 0;  
    }

    console.log("Resultado:", this.resultado);
  }
}
