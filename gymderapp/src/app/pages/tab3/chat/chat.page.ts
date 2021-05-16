import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
<<<<<<< HEAD
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MenuController } from '@ionic/angular';
=======
import { Usuario } from 'src/app/interfaces/interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';

>>>>>>> e4d415c4cfeb0f972a4463111931378f732440cf

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
<<<<<<< HEAD
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
=======



  usuario: Usuario = {};
  usuario1 = {};
  listaUser: Map<String,any> = new Map()
  llave: String;
  constructor(
    private socket:Socket,
    private usuarioService: UsuarioService
    ) 
  
  { 
    //console.log(socket);
    this.usuario = usuarioService.getUsuario(); 
    console.log ('', this.usuario);
    this.llave = this.usuario.username;
    console.log('llave : ',this.llave)
    this.socket.emit('connection')
    this.socket.emit('me-conecto', this.usuario);

    this.socket.on('listausuarios', function(data){
      this.listaUser = data;
      console.log('la lista',this.listaUser);
      
       
      
      
    
    
      
    })
  
    console.log('llave2 :', this.llave)
    this.usuario1 = this.listaUser[0]
    console.log('hola1',this.usuario1);
    console.log('prueba3',this.listaUser[1])

   

   
    
  }

  ngOnInit() {

    this.listaUser 

    
    
>>>>>>> e4d415c4cfeb0f972a4463111931378f732440cf
  }

}

