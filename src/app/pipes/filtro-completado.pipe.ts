import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista';

@Pipe({
  name: 'filtroCompletado',
  pure: false //De esta forma siempre se esta comprobando si las listas tienen todas las tareas terminadas o no
})
export class FiltroCompletadoPipe implements PipeTransform {

  transform(listas:Lista[], completada:boolean = true): Lista[] {
    return listas.filter( lista => lista.terminada === completada);
  }

}
