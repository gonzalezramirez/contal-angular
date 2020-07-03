import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InformacionService {

info:any = {};
cargada:boolean=false;


  constructor( public http:HttpClient ) {
  this.http.get("assets/data/info.pagina.json")
  .subscribe( data => {
    console.log(data.json());
    this.cargada = true;
    this.info = data.json();
  })
}
}
