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
  mostrar: boolean = false;
  mensaje: String;
  usuario: Usuario ={};
  constructor(private reservarService: ReservarService, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsuario();
    console.log('',this.usuarioService.getUsuario())
    this.reservarService.getSalas().subscribe((salas :any) =>{
    if(salas['ok']==true){
      this.mostrar = true;
      this.salas = salas['salas'];
    }else if(salas['ok'] == false){
      this.mostrar= false;
      this.mensaje= salas['mensaje']
    }
    })
  }

  reservar(idSala:String){
    
    this.reservarService.addReserva(idSala, this.usuario).subscribe(data =>{
      
    });
  }

}
