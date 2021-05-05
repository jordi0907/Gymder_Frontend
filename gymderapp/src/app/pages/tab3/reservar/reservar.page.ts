import { Usuario } from './../../../interfaces/interfaces';
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
  salas :Sala[];
  usuario: Usuario ={};
  constructor(private reservarService: ReservarService, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsuario();
    this.salas = this.reservarService.getSalas();
  }

}
