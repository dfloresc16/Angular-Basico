import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  
  heroes: string[] = ['SpiderMan', 'Iron Man', 'Hulk'];
  heroeBorrado: string = '';

  borrar(): void{
    this.heroeBorrado = this.heroes.shift() || '';
    
  }

}
