import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {


  personajes:Personaje[]= [
    {
      nombre:'Goku',
      poder:15000
    },
    {
      nombre:'Vegeta',
      poder:7500
    }

  ]

  nuevo:Personaje={
    nombre:'',
    poder:0
  }
  constructor() { }

  ngOnInit(): void {
  }
  

  cambiarNombre(event:any){
    console.log(event.target.value)
  }

  agregarNuevoPersonaje( event : Personaje){
    console.log(`esto es el personaje ${event.nombre} y este es el poder ${event.poder}`)
    this.personajes.push(event)
  }
 
}
