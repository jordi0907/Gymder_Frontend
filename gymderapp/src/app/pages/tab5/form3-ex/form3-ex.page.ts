import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MenuController, ModalController, NavController, NavParams} from '@ionic/angular';
import { collectExternalReferences } from '@angular/compiler';

@Component({
  selector: 'app-form3-ex',
  templateUrl: './form3-ex.page.html',
  styleUrls: ['./form3-ex.page.scss'],
})
export class Form3ExPage implements OnInit {
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

  ngOnInit() {
    this.usuario = this.usuarioService.getUsuario();
    console.log('el usuario dentro del tab5', this.usuario);
    this.editarPerfilForm = this.formBuilder.group({
      email: [
        this.usuario.email,
        [Validators.required, Validators.nullValidator, Validators.email],
      ],
      nombre: [
        this.usuario.username,
        [Validators.required, Validators.nullValidator],
      ],
     });
  }
}
