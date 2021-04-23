import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosServiceService } from '../../services/usuarios-service.service';

@Component({
  selector: 'app-navbar-principal',
  templateUrl: './navbar-principal.component.html',
  styles: [
  ]
})
export class NavbarPrincipalComponent implements OnInit {

  constructor(private router: Router, private usuarioService: UsuariosServiceService) { }

  ngOnInit(): void {
  }
  
  logout(){
    this.usuarioService.logout();
    this.router.navigateByUrl('/login');
  }
}
