import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  constructor() { }

  // Múltiplos del 2
  contador1: number = 0;

  aumentar(): void {
    this.contador1 = this.contador1 + 2;
  }

  disminuir(): void {
    this.contador1 = this.contador1 - 2;
  }

  reiniciar(): void {
    this.contador1 = 0;
  }


  // Múltiplos del 3
  contador2: number = 0;

  aumentar3(): void {
    this.contador2 = this.contador2 + 3;
  }

  disminuir3(): void {
    this.contador2 = this.contador2 - 3;
  }

  reiniciar3(): void {
    this.contador2 = 0;
  }


  // Múltiplos del 5
  contador3: number = 0;

  aumentar5(): void {
    this.contador3 = this.contador3 + 5;
  }

  disminuir5(): void {
    this.contador3 = this.contador3 - 5;
  }

  reiniciar5(): void {
    this.contador3 = 0;
  }


  // Múltiplos del 7
  contador4: number = 0;

  aumentar7(): void {
    this.contador4 = this.contador4 + 7;
  }

  disminuir7(): void {
    this.contador4 = this.contador4 - 7;
  }

  reiniciar7(): void {
    this.contador4 = 0;
  }


  // Múltiplos del 10
  contador5: number = 0;

  aumentar10(): void {
    this.contador5 = this.contador5 + 10;
  }

  disminuir10(): void {
    this.contador5 = this.contador5 - 10;
  }

  reiniciar10(): void {
    this.contador5 = 0;
  }

  // Números primos
  // Estado para el número primo actual
  numeroPrimo: number = 0;
  private numeroActual: number = 1;

  // Auxiliar para comprobar si un número es primo
  private esPrimo(num: number): boolean {
    if (num < 2) return false;
    for (let i = 2, raiz = Math.sqrt(num); i <= raiz; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // Obtener y avanzar al siguiente número primo
  siguientePrimo(): void {
    while (true) {
      this.numeroActual++;
      if (this.esPrimo(this.numeroActual)) {
        this.numeroPrimo = this.numeroActual;
        break;
      }
    }
  }

  // Reiniciar la secuencia de primos
  reiniciarPrimo(): void {
    this.numeroActual = 1;
    this.numeroPrimo = 0;
  }
}