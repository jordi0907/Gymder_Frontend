import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-gymdertentmod',
  templateUrl: './gymdertentmod.page.html',
  styleUrls: ['./gymdertentmod.page.scss'],
})
export class GymdertentmodPage implements OnInit {

  editarPerfilForm: FormGroup;

  usuario: Usuario;
  username;
  constructor(private route: ActivatedRoute, private usuarioService: UsuarioService, private formBuilder: FormBuilder, private UiService: UiServiceService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(paramMap => {
      this.username = paramMap.get('id');
    })
    console.log(this.username);

    this.usuarioService.getUserUsername(this.username).subscribe(
      resp => {
        console.log(resp);
        this.usuario = resp;
        this.editarPerfilForm = this.formBuilder.group({
          email: [
            this.usuario.email,
            [Validators.required, Validators.nullValidator, Validators.email],
          ],
          nombre: [
            this.usuario.username,
            [Validators.required, Validators.nullValidator],
          ],
          avatar: [
            this.usuario.avatar,
            [Validators.required, Validators.nullValidator],
          ],
          privacidad: [
            this.usuario.privacidad,
            [Validators.required, Validators.nullValidator],
          ],
          notificaciones: [
            this.usuario.notificaciones,
            [Validators.required, Validators.nullValidator],
          ],
          autenticar: [
            this.usuario.autenticar,
            [Validators.required, Validators.nullValidator],
          ]
        });

        },
      (err) => {
        console.log(err);
      }
    );




  }

  actualizar(userId: String){
    if (this.editarPerfilForm.invalid) { return;}

    let userRegistered ={
      username: this.editarPerfilForm.value.nombre,
      email: this.editarPerfilForm.value.email,
      avatar:  this.editarPerfilForm.value.avatar,
      privacidad: this.editarPerfilForm.value.privacidad,
      notificaciones: this.editarPerfilForm.value.notificaciones,
      autenticar: this.editarPerfilForm.value.autenticar
    }

    this.usuarioService.updateUserGym(userId, userRegistered ).subscribe(
      resp => {
        console.log(resp);
        this.UiService.alertaInformativa('Usuario Actualizado');

        },
      (err) => {
        console.log(err);
        this.UiService.alertaInformativa('ERROR');
      }
    );
  }
}
