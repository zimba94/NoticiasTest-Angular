import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { NavbarPrincipalComponent } from './navbar-principal/navbar-principal.component';
import { NavbarBuscarComponent } from './navbar-buscar/navbar-buscar.component';




@NgModule({
  declarations: [
    TarjetasComponent,
    NavbarPrincipalComponent,
    NavbarBuscarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarPrincipalComponent,
    NavbarBuscarComponent,
    TarjetasComponent
  ],
})
export class ComponentsModule { }
