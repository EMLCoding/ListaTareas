import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from '../../models/lista';
import { ListaItem } from '../../models/lista-item';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage{

  lista: Lista;
  nombreItem = '';

  constructor( private deseosService: DeseosService, private route:ActivatedRoute) {
    //El siguiente metodo recoge el elemento listaId de la url en la que nos encontramos
    const identificador = this.route.snapshot.paramMap.get('listaId');
    //Guardamos en el objeto lista que hemos creado la lista en la que estamos
    this.lista = this.deseosService.obtenerLista(identificador);
   }

   agregarItem(){
     //Si se escribe un nombre en blanco no hacemos nada
      if(this.nombreItem.length<=0){
        return;
      }
      //Una vez pasada la validacion..
      //Creamos un objeto de tipo ListaItem y le pasamos por parametro el nombre introducido
      const nuevoItem = new ListaItem( this.nombreItem);
      this.lista.items.push( nuevoItem );

      //Vaciamos el nombre por si se quieren añadir mas items
      this.nombreItem = '';

      //Guardamos los items añadidos
      this.deseosService.guardarStorage();
   }

   //Este metodo permitira guardar la propiedad de completado de los items y ver si estan todos los items de una lista completados.
   //Cuando todos los items esten completados entonces hay que poner la fecha de terminado de la lista y el valor terminado en true
   cambioCheck(item:ListaItem){
     //La siguiente linea va a contar cuantos items de la lista estan con el atributo "completado" en "false"
     const pendientes = this.lista.items.filter( itemData => !item.completado).length;

     if(pendientes===0){
       //Pone la fecha del sistema como fecha en la que se ha completado la lista
       this.lista.terminadaEn = new Date();
       //Pone la lista como terminada
       this.lista.terminada = true;
     }else{
      this.lista.terminadaEn = null;
      this.lista.terminada = false;
     }
      this.deseosService.guardarStorage();
   }


}
