import { Component, OnInit } from '@angular/core';
import {UsuarioService} from 'src/app/services/usuario.service'
import {SolicitudAmistad, Usuario} from '../../../../interfaces/interfaces'
@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {

  solicitudAmistad: SolicitudAmistad = {};
  email = '';
  usuario: Usuario = {};

  constructor(public usuarioService: UsuarioService) { }


  send() {
    this.solicitudAmistad.emailAmigo=this.email;
    console.log('este es el email' + this.email);
    this.usuario = this.usuarioService.getUsuario();
    console.log('este es el id' + this.usuario._id);

    this.solicitudAmistad.idInvitador = this.usuario._id;
    console.log( this.solicitudAmistad );
     
    this.usuarioService.addAmigo(this.solicitudAmistad).subscribe (res =>{
          
      console.log(res.code)
    },

    err => {
      console.log(err.status)
    }
    )

    
  }




  ngOnInit() {
  }

}
