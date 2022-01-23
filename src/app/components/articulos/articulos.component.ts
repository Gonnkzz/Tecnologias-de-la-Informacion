import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/models/articulo';
import { Params } from '@angular/router';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  public newArticulo : string;
  public newDepartment : string;
  public articulos: Array<Articulo>;
  public departments : Array<String>;

  constructor(
    private route : ActivatedRoute,
    private router : Router) 
    { 
    this.articulos = [
      new Articulo("Screwdriver","Tool, hand-operated or power-operated, for turning screws","Hardware",50,"ImagenDesarmador"),
      new Articulo("Screwdriver","Tool, hand-operated or power-operated, for turning screws","Hardware",50,"ImagenDesarmador"),
      new Articulo("Screwdriver","Tool, hand-operated or power-operated, for turning screws","Hardware",24,"ImagenDesarmador"),
      new Articulo("Screwdriver","Tool, hand-operated or power-operated, for turning screws","Hardware",544,"ImagenDesarmador"),
      new Articulo("Screwdriver","Tool, hand-operated or power-operated, for turning screws","Hardware",55,"ImagenDesarmador"),
      new Articulo("Screwdriver","Tool, hand-operated or power-operated, for turning screws","Hardware",5,"ImagenDesarmador")
    ];
    this.departments = [];
    this.newArticulo = "";
    this.newDepartment = "";

    this.route.params.subscribe((params : Params) => {
      console.log(params["lang"]);
      console.log(params["duration"]);

      if(params["lang"] == "HOME")
        this.router.navigate(["/home"]);
    });
  }
    

  ngOnInit(): void {
    this.getDepartaments();
  }

  addDepartaments(department : string) {
   if(this.departments.indexOf(department)<0)
      this.departments.push(department);
  }

  getDepartaments() {
    this.articulos.forEach((articulo) => {
      this.addDepartaments(articulo.department);
      
    });
  }

  ngDoCheck() {

  }

  onGoHome() {
    this.router.navigate(["/home"]);
  }

  onEnter() {
    this.articulos.push(new Articulo(this.newArticulo,"Nuevo Articulo","Nuevo Articulo",0,"No hay"));
    
  }
  onUpload() {
    if(this.departments.indexOf(this.newDepartment)<0)
      this.departments.push(this.newDepartment);
  }

  deleteDepartment(i:number) {
    this.departments.splice(i,1);
  }

}
