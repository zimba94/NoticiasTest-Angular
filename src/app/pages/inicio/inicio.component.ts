import { Component, HostListener, OnInit } from '@angular/core';
import { Article } from '../../interfaces/interfaces';
import { NoticiasService } from '../../services/noticias-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  @HostListener ('window:scroll', ['$event'])
  onScroll(){
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1200;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);
    
    if (pos>max) {

      if (this.noticiasService.cargando) { return; }

      this.noticiasService.getTopHeadlines().subscribe( resp => {
        this.noticias.push(...resp.articles);
      });

    }
  }

  noticias: Article [] = [];
  loading:boolean; 
  error:boolean;
  msjError : string;

  constructor(private noticiasService: NoticiasService) {
    this.cargarNoticias();
   }

  ngOnInit(): void {
    
  }

  loadData(event){
    this.cargarNoticias(event);
  }

  cargarNoticias(event?){
    console.log("Cargar Noticias");
    this.noticiasService.getTopHeadlines()
        .subscribe(resp => {
          console.log(resp);
          if (resp.articles.length === 0) {
            event.target.disabled = true;
            event.target.complete();
            return;
          }

          this.noticias.push(...resp.articles);
          console.log(this.noticias);
          if (event) {
            event.target.complete();
          }
    });
  }

  ngOnDestroy(): void {
    this.noticiasService.resetPage();
  }

}
