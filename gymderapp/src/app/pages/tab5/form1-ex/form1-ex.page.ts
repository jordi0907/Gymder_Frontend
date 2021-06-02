import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MenuController, ModalController, NavController, NavParams} from '@ionic/angular';
import { collectExternalReferences } from '@angular/compiler';

@Component({
  selector: 'app-form1-ex',
  templateUrl: './form1-ex.page.html',
  styleUrls: ['./form1-ex.page.scss'],
})
export class Form1ExPage implements OnInit {
  usuario: Usuario = {};
  editarPerfilForm: FormGroup;
  texto: string;
  texto2: string;
  numero: string;
  universidad: string;
  Enviarform : FormGroup;
  nombre: string;

  constructor(private formBuilder: FormBuilder,private usuarioService: UsuarioService) { 
    this.usuario= usuarioService.getUsuario();
    console.log(this.usuario);
  }

  ngOnInit() {this.usuario = this.usuarioService.getUsuario();
    console.log('el usuario dentro del tab5', this.usuario);

  }
  AddDatos() { //subir texto
    this.numero = this.texto;
    this.usuario.numero=this.numero;
    this.texto = "";
    this.universidad = this.texto2;
    this.usuario.universidad=this.universidad;
    this.texto2 = "";
    console.log(this.usuario);
 
  }

}
