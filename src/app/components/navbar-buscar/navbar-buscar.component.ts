import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-buscar',
  templateUrl: './navbar-buscar.component.html',
  styles: [
  ]
})
export class NavbarBuscarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  buscarNoticia(texto: string){

    texto = texto.trim();

    if (texto.length === 0) {
      return;
    }

    this.router.navigate(['/buscar', texto]);
  }

}
