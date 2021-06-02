import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MenuController, ModalController, NavController, NavParams} from '@ionic/angular';
import { collectExternalReferences } from '@angular/compiler';

@Component({
  selector: 'app-form2-ex',
  templateUrl: './form2-ex.page.html',
  styleUrls: ['./form2-ex.page.scss'],
})
export class Form2ExPage implements OnInit {
  usuario: Usuario = {};
  editarPerfilForm: FormGroup;
  listaMensajes : any[] = [];
  texto: string;
  Enviarform : FormGroup;
  nombre: string;

  constructor(private formBuilder: FormBuilder,private usuarioService: UsuarioService) {
    this.usuario= usuarioService.getUsuario();
    console.log(this.usuario);

   }

  ngOnInit() { 
    this.listaMensajes = [];  
    this.usuario = this.usuarioService.getUsuario();
    console.log('el usuario dentro del tab5', this.usuario);

    }
    AddM() { //subir texto
      this.listaMensajes.push(this.texto)
      this.usuario.examen = this.listaMensajes;
      this.texto = "";
      console.log(this.usuario)
      
      /*let userCambio ={
        username: this.usuario.username,
        email: this.usuario.email,
        examen: this.usuario.examen
      }
      console.log (userCambio);
      this.usuarioService.examenRoute(userCambio).subscribe( data =>{
    }, err =>{
      console.log("error");
      if (err.status == 400) { 
        console.log("404")}} )
      console.log('nuevos datos usuario' + this.usuarioService.getUsuario())
      */
    }
  }


