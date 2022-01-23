export class Articulo {
    public name : String;
    public description : string;
    public department : string;
    public pu : number;
    public imagen : string;

    public constructor (name:string, description:string, department:string, pu:number, imagen:string){
        this.name = name;
        this.description = description;
        this.department = department;
        this.pu = pu;
        this.imagen = imagen;
    }
}