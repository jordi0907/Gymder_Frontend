import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MenuController, ModalController, NavController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-privchat',
  templateUrl: './privchat.page.html',
  styleUrls: ['./privchat.page.scss'],
})
export class PrivchatPage implements OnInit {
  usuario: Usuario = {};
  listaMensajes : any[] = [];
  texto: string;
  Enviarform : FormGroup;
  nombre: string;
  nsala: Number;

  constructor(private socket:Socket, 
    private usuarioService: UsuarioService,
    private navCtrl: NavController, 
    private formBuilder: FormBuilder) {
    this.usuario= usuarioService.getUsuario();
    console.log(this.usuario);

   }

  ngOnInit() {
    this.socket.on('messages', (data) => {
      this.listaMensajes = data;
      console.log("*", this.listaMensajes); 
    });
    
    this.socket.on('numero', (data) => {
      this.nsala = data;
      console.log('mi numero de sala es: ' + this.nsala); 
    });  
    
  }
  AddM() {
    console.log(this.usuario.username);
    this.socket.emit('new-message-g', (this.usuario.username + ": " + this.texto))
    this.texto = "";
  }

}
