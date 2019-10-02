import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public deseosService:DeseosService, private router:Router, private alertController: AlertController) {}

  //El async hace que la funcion se convierta en una "promesa"
  async agregarLista(){
    //Se le indica la ruta que esta en tabs.router.module.ts
    //this.router.navigateByUrl('/tabs/tab1/agregar');

    const alert = await this.alertController.create({
      header: 'Nueva Lista',
      inputs:[
        {
          name: 'titulo',
          type: 'text',
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
          }
        },
        {
          text: 'Crear',
          //Este handler va a recibir lo escrito en el input y lo guarda en "datos"
          handler: ( datos ) => {
            //Este "titulo" es el del "name" del input
            if(datos.titulo.length>0){
              console.log(datos);
              const listaId = this.deseosService.crearLista(datos.titulo);
              //Se le indica la ruta, que esta indicada en tabs.router.module.ts, a la que nos redirigira la app al crear una lista
              this.router.navigateByUrl(`/tabs/tab1/agregar/${ listaId }`);
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


