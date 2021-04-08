import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor( private usuarioService: UsuarioService) {}
  ngOnInit() {
  }
  logout() {
    this.usuarioService.logout();
  }

}
