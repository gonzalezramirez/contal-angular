import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: [
  ]
})
export class ItemComponent implements OnInit {

  constructor( private route : ActivatedRoute,
                public productosService: ProductosService ) { }

  ngOnInit() {
    this.route.params
    .subscribe( parametros =>{
      //console.log(parametros['id']);

this.productosService.getProducto(parametros['id'])
.subscribe((producto: ProductoDescripcion) => {
  console.log(producto);
});
    });
  }

}


interface ProductoDescripcion {
  categoria: string;
  desc1: string;
  desc2: string;
  producto: string;
  resumen: string;
  subtitulo1: string;
  subtitulo2: string;
}
