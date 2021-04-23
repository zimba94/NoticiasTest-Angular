import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {
  
  @Input() noticias: Article[] = [];

  constructor() {
    console.log(this.noticias);
   }

  ngOnInit(): void {
  }

  abrirNoticia(){
    
  }

}
