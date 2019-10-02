import { ListaItem } from './lista-item';

//Esta es la clase con la que se va a crear cada Lista y almacenará todos los elementos de la lista = tareas(list-item)

export class Lista{

    id: number;
    titulo: string;
    creadaEn: Date;
    terminadaEn: Date;
    terminada: boolean;
    items: ListaItem[];

    constructor( titulo:string ){
        //Al crear una nueva lista los siguientes campos van a tener los siguientes valores...
        this.titulo = titulo;
        this.creadaEn = new Date();//Cuando se cree una lista se va a coger la fecha del dispositivo movil en el que estamos
        this.terminada = false;
        this.items = [];
        this.id = new Date().getTime();//Para el ID se va a coger la fecha del sistema y se va a pasar a un numero (getTime()), asi se obtiene un ID unico
    }
}