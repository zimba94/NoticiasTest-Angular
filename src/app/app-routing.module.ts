import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { UsuarioGuard } from './guards/usuario.guard';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,
    canActivate: [UsuarioGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'buscar/:texto',
    component: BuscarComponent,
    canActivate: [UsuarioGuard]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
