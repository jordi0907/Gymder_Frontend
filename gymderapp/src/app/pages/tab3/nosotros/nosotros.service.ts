import { Injectable } from '@angular/core';
import {Integrante} from './integrante.model'
@Injectable({
  providedIn: 'root'
})
export class NosotrosService {



  private equipo: Integrante [] = [
    {
      id: '1',
      nombre: 'Carlos García',
      correo: 'carlos.andres.garcia@estudiantat.upc.edu',
      img: 'assets/carlitos.jpg'
    },
    {
      id: '2',
      nombre: 'Marc Hidalgo',
      correo: 'marc.hidalgo.baena@estudiantat.upc.edu',
      img: 'assets/marc.jpg'
    },
    {
      id: '3',
      nombre: 'Luis Martin',
      correo: 'luis.martin.estrana@estudiantat.upc.edu',
      img: 'assets/luis.jpg'
    },
    {
      id: '4',
      nombre: 'Miguel Rincón',
      correo: 'miguel.angel.rincon@estudiantat.upc.edu',
      img: 'assets/miguel.png'
    },
    {
      id: '5',
      nombre: 'Jordi Rodriguez',
      correo: 'jordi.rodriguez.santos@estudiantat.upc.edu',
      img: 'assets/jordi.jpeg'
    },
    {
      id: '6',
      nombre: 'Kevin Alcalde',
      correo: 'kevin.alcalde@estudiantat.upc.edu',
      img: 'assets/Kevin.jpeg'
    }
  ]


  constructor() { }


  getIntegrante () {

    return [...this.equipo] 

  }

  getIntegranteId(integranteId: string){

  return {
    ...this.equipo.find(integrante=>{
      return integrante.id === integranteId
    } )
  }

  }
}
