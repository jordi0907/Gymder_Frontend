import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  admin: boolean = false;

  constructor( private usuarioService: UsuarioService) {}

  ngOnInit() {
    if(this.usuarioService.getUsuario().role == 1) this.admin = true;
    else this.admin = false;
  }

  logout() {
    this.usuarioService.logout();
  }



}
