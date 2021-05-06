import { Usuario } from './../interfaces/interfaces';
import { Sala } from 'src/app/interfaces/interfaces';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReservarService {

  constructor(private http: HttpClient) { }

  getSalas():Observable<any>{
    return this.http.get(environment.url + "/sala/all");
    
  }

  addReserva(idSala: String, usuario: Usuario):Observable<any>{
    return this.http.post(environment.url + '/sala/add/'+ idSala, usuario);
  }
}
