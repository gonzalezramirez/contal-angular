import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { ProductoDescripcion } from '../../home/producto-descripcion.interface';

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
    setTimeout(() => {
    this.cargando = false;
  },1000);
  });
  }

  getProducto (id: string){
  return this.http.get(`https://contal-674c6.firebaseio.com/productos/${ id }.json`);
 }
}




interface Producto {
  categoria: string;
  cod: string;
  titulo: string;
  url: string;
}
