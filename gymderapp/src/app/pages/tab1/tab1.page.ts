import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Socket } from 'ngx-socket-io';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
   
  usuario: Usuario = {};




  constructor(
    private socket:Socket,
    private usuarioService: UsuarioService
    ) 
    {
      this.usuario=usuarioService.getUsuario();
     
    }

  ngOnInit() {

    
  this.usuario=this.usuarioService.getUsuario();
  console.log("kevinAlcalde",this.usuario);
   
  }

 


}
