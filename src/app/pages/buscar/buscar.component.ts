import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../interfaces/interfaces';
import { NoticiasService } from '../../services/noticias-service.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  noticias: Article[];
  public texto: string = "";

  constructor(private activatedRoute: ActivatedRoute, private noticiasService: NoticiasService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      
      this.texto = params.texto;

      this.noticiasService.buscarNoticias(params.texto).subscribe( resp => {
        this.noticias = resp.articles;
        console.log(this.noticias);
      })
    });
  }

}
