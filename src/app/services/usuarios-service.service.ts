import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuariosServiceService {

  token: string;
  usuario = {
    name: "Alan Mejía",
    email: "alan@gmail.com",
    password: "123",
  };

  constructor(private router: Router) { }



  login(email: string, password: string){

    if (email === this.usuario.email && password === this.usuario.password) {
      this.token = "miToken"
      localStorage.setItem('token', this.token);
      return true;
    } else {
      this.token = "";
      localStorage.setItem('token', this.token);
      return false;
    }

  }

  logout(){

    this.token = "";
    localStorage.clear();

  }

  async validaToken(): Promise<boolean>{
    await this.cargarToken();
    if (!this.token || this.token === "") {
      this.router.navigateByUrl('/login');
      return Promise.resolve(false);
    }else{
      return Promise.resolve(true);
    }
  }

  async cargarToken(){  
    this.token = await localStorage.getItem('token') || null;  
  }
}
