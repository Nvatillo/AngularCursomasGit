import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes : string[] = ['SpiderMan','Thor','IroMan','Hulk'];
  heroeBorrado?:string='';
  constructor() { }

  ngOnInit(): void {
  }
 
  borrarHeroe():void{
   this.heroeBorrado = this.heroes.pop();
  }
}
