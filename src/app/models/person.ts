export class Person {
    public avatar : string;
    public name : String;
    public last_name:string;
    public id : number;
    public email : string;

    constructor (avatar : string, name:string, last_name:string, id:number, email:string) {
        this.avatar = avatar;
        this.name = name;
        this.last_name = last_name;
        this.id = id;
        this.email = email;
    }
}