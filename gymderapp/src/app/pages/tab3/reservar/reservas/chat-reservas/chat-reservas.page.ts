import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MenuController, ModalController, NavController, NavParams} from '@ionic/angular';
import { collectExternalReferences } from '@angular/compiler';

@Component({
  selector: 'app-chat-reservas',
  templateUrl: './chat-reservas.page.html',
  styleUrls: ['./chat-reservas.page.scss'],
})
export class ChatReservasPage implements OnInit {
  usuario: Usuario = {};
  listaMensajes : any[] = [];
  mensajesPrivado: any[] = [];
  texto: string;
  Enviarform : FormGroup;
  nombre: string;
  nsala: any;


  constructor(private socket:Socket, 
    private usuarioService: UsuarioService,
    private navCtrl: NavController, 
    ) {
    this.usuario= usuarioService.getUsuario();
    console.log(this.usuario);

   }

   ngOnInit() {  //pendiente de mensajes ...
    this.socket.on('messages', (data) => {
      this.listaMensajes = data;
      console.log("*", this.listaMensajes); 
    });
    
    this.socket.on('numero', (data) => {
      this.nsala = data;
      console.log('mi numero de sala es: invitador ' + this.nsala); 
    });  
    
    this.socket.on('mensajeSala', (data) => {
      console.log ("mensajes fin", data);
      this.mensajesPrivado.push(data);
      console.log("lista mensajes privados", this.mensajesPrivado);
    })
    
  }
  AddM() {  //enviar mensaje privado
    console.log(this.usuario.username);
    this.socket.emit('mensajesPriv', 
    this.usuario.username + ": " + this.texto,
    this.nsala)
    this.texto = "";
  }  

}

