import { Usuario } from './../interfaces/interfaces';
import { Sala } from 'src/app/interfaces/interfaces';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';


@Injectable({
  providedIn: 'root'
})
export class ReservarService {
  navData:any;
  constructor(private http: HttpClient) { }

  getSalas():Observable<any>{
    return this.http.get(environment.url + "/sala/all");
    
  }

  addReserva(idSala: String, usuario: Usuario):Observable<any>{
    return this.http.post(environment.url + '/sala/add/'+ idSala, usuario);
  }

  getReservas():Observable<any>{
    return this.http.get(environment.url+ '/sala/my');
  }

  deleteReserva(id: String):Observable<any>{ //Eliminar reserva de un usuario
    return this.http.delete(environment.url+ '/sala/my/'+ id);
  }
  createSala(sala: Sala):Observable<any>{
    return this.http.post(environment.url + '/sala/new/', sala);
  }
  deleteSala(id: String):Observable<any>{ //Eliminar Sala
    return this.http.delete(environment.url+ '/sala/'+ id);
  }
  setNavData(obj){
    this.navData= obj;
  }
  getNavData(){
    if(this.navData === null || this.navData === undefined) return 0;
    return this.navData;
  }
}
