import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RespuestaTopHeadlines} from '../interfaces/interfaces';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;
const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  headlinesPage=0;
  public cargando: boolean = false;

  constructor(private http: HttpClient) { }



  private ejecutarQuery<T>(query: string){
    query = apiUrl + query;
    return this.http.get<T>(query, {headers});
  }

  getTopHeadlines(){
    this.headlinesPage++;
    console.log('headers');
    console.log(headers);
    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=mx&page=${this.headlinesPage}`);
  }

  buscarNoticias( texto: string ) {
    return this.ejecutarQuery<RespuestaTopHeadlines>(`/everything?q=${texto}`);
  }
  resetPage() {
    this.headlinesPage=0;
  }

}