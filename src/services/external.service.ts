import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()

export class ExternalSerivice {
    public url : string;

    constructor(public httpClient:HttpClient){
        this.url = "https://reqres.in/api/users"
    }

    getUserList() {
        return this.httpClient.get(this.url);
    }

}