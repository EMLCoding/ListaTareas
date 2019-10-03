//Este modulo se crea casi al final del tema con el comando: ionic g m components

import { NgModule } from '@angular/core';//Este modulo es fijo y necesario siempre
import { CommonModule } from '@angular/common';//Este modulo contiene caracteristicas como los *ngFor o *ngIf
import { ListasComponent } from './listas/listas.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    ListasComponent,//Este se crea despues de crear este modulo
  ],
  //En los "exports" se añaden todos aquellos componentes de este modulo que se van a querer utilizar en componentes ajenos a este modulo
  exports: [
    ListasComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
  ]
})
export class ComponentsModule { }
