import { Injectable } from '@angular/core';
import { Lista } from '../models/lista';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  //Se va a trabajar con un array de objetos Lista
  listas: Lista[] = [];

  constructor() {
    console.log("Servicio inicializado");

    //Las siguientes constantes se van a utilizar para realizar pruebas:
    const lista1 = new Lista( 'Lista de la compra' );
    const lista2 = new Lista( 'Cosas que hacer' );
    //Se añaden las listas al array
    this.listas.push(lista1, lista2);
    console.log(this.listas);
    
   }
}
