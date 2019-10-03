import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  //Este "terminada" se va a usar para que en el HTML de tab1 y tab2 se mande a este componente un true o un false y asi se redirija a una ruta u otra.
  //Es decir, cuando en tab1.html se llame al html de este componente se puede poner [terminada]=true, entonces ese true viaja hasta este componente
  @Input() terminada = true;

  //Se llama al elemento ionList html desde aqui
  @ViewChild( IonList ) elementoListaHtml: IonList;

  lista:Lista;

  constructor( private router: Router, public deseosService: DeseosService, private alertController: AlertController) { }

  ngOnInit() {}

  //ESTE METODO DEBE ESTAR AQUI PARA PODER SE REUTILIZABLE EN TAB1 Y TAB2
  listaSeleccionada(lista:Lista){
    console.log(lista);
    if(this.terminada){
      //Tab2.html devuelve un true y se redirige a esta ruta
      this.router.navigateByUrl(`/tabs/tab2/agregar/${ lista.id }`);
    }else{
      //Tab1.html devuelve un false y se redirige a esta ruta
      this.router.navigateByUrl(`/tabs/tab1/agregar/${ lista.id }`);
    }
  }

  //ES PRACTICAMENTE IGUAL AL METODO "agregarLista()" de tab1.page.ts
  async editarLista(lista:Lista){
    const alert = await this.alertController.create({
      header: 'Editar Lista',
      inputs:[
        {
          name: 'titulo',
          type: 'text',
          value: lista.titulo,
          placeholder: 'nombre de la lista',
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          /* El Handler se ejecuta cuando el boton ha sido pulsado o se cierra este popup */
          handler: () =>{
            console.log("Cancelado");
            //Permite cerrar el elemento IonList del HTML
            this.elementoListaHtml.closeSlidingItems();
          }
        },
        {
          text: 'Actualizar',
          //Este handler va a recibir lo escrito en el input y lo guarda en "datos"
          handler: ( datos ) => {
            //Este "titulo" es el del "name" del input
            if(datos.titulo.length>0){
              console.log(datos);
              //Se modifica el titulo que tuviera la lista por el que se ha escrito nuevo
              lista.titulo = datos.titulo;
              this.deseosService.guardarStorage();
              //Permite cerrar el elemento IonList del HTML
              this.elementoListaHtml.closeSlidingItems();
            }else{
              return;
            }
          }
        }
      ]
    });

    await alert.present();
  }

   

}
