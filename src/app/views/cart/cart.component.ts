import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  productosCarrito = [
    {
      titulo: 'Audifonos Bluetooth',
      imagen: ''
    },
    {
      titulo: 'Smartwatch Xiaomi',
      imagen: ''
    },
    {
      titulo: 'Camara WEB HD',
      imagen: ''
    },
    {
      titulo: 'Disco Duro Externo',
      imagen: ''
    },
    {
      titulo: 'Bocina Portatil',
      imagen: ''
    }
  ];
}
