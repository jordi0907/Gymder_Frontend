import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post, RespuestaPosts } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  paginaPosts = 0;

  nuevoPost = new EventEmitter<Post>();

  constructor( private http: HttpClient) { }

  crearEvent( evento: any) {
    this.nuevoPost.emit(evento);
  }

  getPost( pull: boolean = false): Observable<any>{

    if(pull){
      this.paginaPosts = 0;

    }
    this.paginaPosts ++;
    return this.http.get<RespuestaPosts>(environment.url + `/postusuario/?pagina=${ this.paginaPosts }`);
  }

  crearPost(post): Observable<any>{
    return this.http.post<any>(environment.url + `/postusuario`, post);
  }




}
