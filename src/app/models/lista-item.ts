//Esto es una clase con la que se van a crear los diferentes elementos de cada una de las lista de tareas

export class ListaItem{
    desc: string;
    completado: boolean;

    constructor( desc:string){
        this.desc = desc;
        this.completado = false;
    }
}