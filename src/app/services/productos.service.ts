import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductosService {

cargando= true;

  constructor( public http: HttpClient ) {
this.cargarProductos();
  }

  private cargarProductos(){
    this.http.get('https://contal-674c6.firebaseio.com/productos_idx.json')
    .subscribe( (resp:any[] )=> {
    console.log(resp);
    this.cargando = false; 
  });
  }
}
