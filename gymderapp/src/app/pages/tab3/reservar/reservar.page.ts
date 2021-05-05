import { Usuario, Post } from './../../../interfaces/interfaces';
import { UsuarioService } from './../../../services/usuario.service';
import { ReservarService } from 'src/app/services/reservar.service';
import { Component, OnInit } from '@angular/core';
import {Sala} from 'src/app/interfaces/interfaces'


@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.page.html',
  styleUrls: ['./reservar.page.scss'],
})
export class ReservarPage implements OnInit {
  salas : Array<Sala> = []
  usuario: Usuario ={};
  constructor(private reservarService: ReservarService, private usuarioService: UsuarioService) { }

  ngOnInit() {
    //this.usuarioService.getUsuario();
    this.reservarService.getSalas().subscribe((salas :any) =>{
    this.salas = salas;
    })
  }

  reservar(){
    //this.reservarService.addReserva().
  }

}
