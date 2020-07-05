import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductosService {

cargando= true;
productos: Producto[] = [];

  constructor( public http: HttpClient ) {
this.cargarProductos();
  }

  private cargarProductos(){
    this.http.get('https://contal-674c6.firebaseio.com/productos_idx.json')
    .subscribe( (resp: Producto[] )=> {
    console.log(resp);
    this.productos = resp;
    this.cargando = false;
  });
  }
}
interface Producto {
  categoria: string;
  cod: string;
  titulo: string;
  url: string;
}
