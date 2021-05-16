import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Usuario } from '../../interfaces/interfaces';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
   
  usuario1: Usuario;




  constructor(
    private socket:Socket,
    private usuarioService1: UsuarioService  
    ) {}

  ngOnInit() {


  
    //console.log("Esta todo bien");
  }

  logout() {
    
  }


}
