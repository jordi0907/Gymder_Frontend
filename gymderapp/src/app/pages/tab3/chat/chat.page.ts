import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  usuario: Usuario = {};
  texto: string;
  Enviarform : FormGroup;
  listaMensajes : any[] = [];
  listaUser:  Usuario [] = [];
  
  constructor(private socket:Socket, private usuarioService: UsuarioService, private formBuilder: FormBuilder) { 
 
    console.log(socket);
    this.usuario= usuarioService.getUsuario();
    console.log(this.usuario);
    
  }

  ngOnInit() { 
    this.socket.emit('connection')
    this.socket.emit('me-conecto', this.usuario)
    this.socket.on('listausuarios', (data) => 
    {
      this.listaUser = data;
      console.log('la lista de conectados es: ', data ) 
    });

    this.socket.on('messages', (data) => {
      this.listaMensajes = data;
      console.log("*", this.listaMensajes); 
  
    });  

    console.log("Esta todo bien 2");
    this.usuario = this.usuarioService.getUsuario();
    console.log(this.usuarioService.getUsername());
    this.Enviarform = this.formBuilder.group({});

  }
  AddM() {
    console.log(this.usuario.username);
    this.socket.emit('new-message-g', (this.usuario.username + ": " + this.texto))
  }

}

