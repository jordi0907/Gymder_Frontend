import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  usuario: Usuario = {};

  constructor( private usuarioService: UsuarioService) {}
  ngOnInit() {
    this.usuario = this.usuarioService.getUsuario();
    console.log("el usuario", this.usuario)
  }
  logout() {
    this.usuarioService.logout();
  }

}
