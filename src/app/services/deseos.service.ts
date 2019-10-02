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
    this.cargarStorage();//Carga los datos cada vez que se abre la app
    
   }

   crearLista (titulo: string){
    const nuevaLista = new Lista( titulo );
    this.listas.push(nuevaLista);
    this.guardarStorage();//Guarda la informacion en el Local Storage
   }

   //Cuando se añadan listas se va a guardar en el Local Storage
   guardarStorage(){
      localStorage.setItem('datos',JSON.stringify(this.listas));//Convierte la informacion en string porque en localStorage solo se pueden guardar stringss
   }

   //Este metodo permite cargar
   cargarStorage(){
     //Si hay datos guardados entonces cargalos en el array de listas
     if(localStorage.getItem('datos')){
      this.listas = JSON.parse(localStorage.getItem('datos'));
     }
   }
}
