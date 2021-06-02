import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MenuController, ModalController, NavController, NavParams} from '@ionic/angular';
import { collectExternalReferences } from '@angular/compiler';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  usuario: Usuario = {};
  
  constructor(usuarioService: UsuarioService) {
    this.usuario= usuarioService.getUsuario();
    console.log(this.usuario);
   }

  ngOnInit() { 
      
  }
}

