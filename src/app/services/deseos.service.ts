import { Injectable } from '@angular/core';
import { Lista } from '../models/lista';

//Esto hace que este Servicio pueda ser utilizado en TODOS los componentes de TODOS LOS MODULOS con solo declararlo en el "constructor" del componente deseado
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
    //Este metodo va a devolver un id, para que cuando se cree una lista nueva nos rediriga directamente a la ventana de dicha lista
    return nuevaLista.id;
   }

   //Se pasa por parametro un "id" que puede ser un "string" O un "number".
   //El metodo se va a usar para obtener una lista en funcion de su ID
   obtenerLista( id: string | number){
    //Forzamos que el id sea un numero
    id = Number(id);
    //Devuelve un booleano
    return this.listas.find( listaResultado => listaResultado.id === id);

   }

   //Cuando se añadan listas se va a guardar en el Local Storage
   guardarStorage(){
     //"localStorage.setItem" es un metodo ya predefinido por Ionic
      localStorage.setItem('datos',JSON.stringify(this.listas));//Convierte la informacion en string porque en localStorage solo se pueden guardar stringss
   }

   //Este metodo permite cargar
   cargarStorage(){
     //Si hay datos guardados entonces cargalos en el array de listas
     //"localStorage.getItem" es un metodo ya predefinido por Ionic
     if(localStorage.getItem('datos')){
      this.listas = JSON.parse(localStorage.getItem('datos'));
     }
   }

   borrarLista(indice:number){
    //El metodo "splice" borrar la cantidad de listas que queramos (el 1) desde la posicion indicada (indice).
    this.listas.splice(indice, 1);
    this.guardarStorage();
  }
}
