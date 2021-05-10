import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
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

    
    
  }

}
