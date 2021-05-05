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
/*
  private _salas:Sala[] = [
    {
      "name": "Sala 1",
      "actividad": "Body pump",
      "horario": "Martes, de 9:30 a 10:30",
      "maxInscritos": 15,
      "numInscritos": 9
    }
    ,
    {
      "name": "Sala 2",
      "actividad": "Spinning",
      "horario": "Martes, de 11:00 a 12:00",
      "maxInscritos": 15,
      "numInscritos": 9
    },
    {
      "name": "Sala 3",
      "actividad": "Zumba",
      "horario": "Miercoles, de 10:30 a 11:30",
      "maxInscritos": 15,
      "numInscritos": 9
    },
    {
      "name": "Sala 4",
      "actividad": "Crossfit",
      "horario": "Jueves, de 10:00 a 11:30",
      "maxInscritos": 15,
      "numInscritos": 9
    }
  ];*/

  getSalas():Observable<any>{
    return this.http.get(environment.url + "/sala/all");
    
  }
}
