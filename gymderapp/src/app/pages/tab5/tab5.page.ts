import { Component, OnInit } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Socket } from 'ngx-socket-io';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { Usuario,Faq } from 'src/app/interfaces/interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MenuController, ModalController, NavController, AlertController} from '@ionic/angular';
import { PostsService } from 'src/app/services/posts.service';
import { UiServiceService } from 'src/app/services/ui-service.service';

import {Validator} from '../../interfaces/validator';


@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  usuario: Usuario = {};
  faq: Faq = {};
  usuarioEnviar: string;
  faqForm1: FormGroup;
  texto: string;
  texto2: string;
  palabra1: string;
  palabra2: string;
  Enviarform : FormGroup;
  listaMensajes : any[] = [];
  listaUser:  Usuario [] = [];
  nsala: Number;

  constructor( 
    private usuarioService: UsuarioService)
    
     
    { 
    this.usuario= usuarioService.getUsuario();
    this.faq = usuarioService.getFaq();
    console.log(this.usuario);
    console.log(this.faq);
  }

  ngOnInit() {


  }


  AddM() {   //envio de mensajes
    console.log(this.usuario);
    
    this.usuario.palabra1 = this.texto;
    this.texto = "";
    console.log(this.usuario)

  }

}
