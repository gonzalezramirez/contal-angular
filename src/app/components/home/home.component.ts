import { Component } from '@angular/core';
import { InformacionService} from '../../services/informacion.service'
import { ProductosService } from '../../services/productos.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

constructor ( public _infoService: InformacionService,
              public productosService: ProductosService){

}
}
