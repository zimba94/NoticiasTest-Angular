import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosServiceService } from '../../services/usuarios-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  form: FormGroup;

  loginUsuario = {
    name: "Alan Mejía",
    email: "alan@gmail.com",
    password: "123",
  };

  constructor(private usuarioService: UsuariosServiceService, private router: Router, private formBuilder: FormBuilder) { 
    this.createForm();
  }

  ngOnInit(): void {
  }
  createForm(){
    this.form = this.formBuilder.group({
      email   : ['alan@gmail.com', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password : ['123', [Validators.required]]
    });
  }

  login(){

    if (this.form.invalid) {
      Object.values( this.form.controls).forEach( control =>{
        control.markAsTouched();
      });
      return;
    }
    console.log(this.form.value);
    const valido = this.usuarioService.login(this.form.value.email, this.form.value.password);
    if (valido) {
      this.router.navigateByUrl('/inicio');
    }else{
      alert("Usuario o contraseña incorrectos");
    }

    
  }
}
