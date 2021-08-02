import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input('dataPersonaje') nuevo:Personaje = {nombre:'',poder:0}

  agregar():void{ 
    if(this.nuevo.nombre.trim().length === 0){return;}

    console.log(this.nuevo)
    this.nuevo ={ 
      nombre:'',
      poder:0
    }
  }
}
