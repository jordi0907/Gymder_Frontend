import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})

export class ChatPage implements OnInit {

  usuario: Usuario = {};

  constructor(
    private socket:Socket,
    private usuarioService: UsuarioService
    ) 
  
  { 
    console.log(socket);
    this.usuario = usuarioService.getUsuario(); 
    let messages= {}
    this.socket.emit('connection')
    this.socket.emit('new-message', this.usuario)
    
    this.socket.on('messages', function (data) {
      messages = messages + data;
      console.log('frontend'+messages);
      

    });
  }

  ngOnInit() {
  }

}
