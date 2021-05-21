import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RespuestaPosts } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  paginaPosts = 0;

  constructor( private http: HttpClient) { }

  getPost(): Observable<any>{
    this.paginaPosts ++;
    return this.http.get<RespuestaPosts>(environment.url + `/posts/?pagina=${ this.paginaPosts }`);
  }
}
