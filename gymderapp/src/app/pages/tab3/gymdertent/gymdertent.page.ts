import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-gymdertent',
  templateUrl: './gymdertent.page.html',
  styleUrls: ['./gymdertent.page.scss'],
})
export class GymdertentPage implements OnInit {

  usuarios: Usuario[] = [];
  admin: boolean = false;

  constructor(private usuarioService: UsuarioService, public alertController: AlertController) { }

  ngOnInit() {
    if(this.usuarioService.getUsuario().role == 1) this.admin = true;
    else this.admin = false;

    this.usuarioService.getAllUsers().subscribe(
      resp => {
        console.log(resp);
        this.usuarios = resp;

        },
      (err) => {
        console.log(err);
      }
    );

  }

  eliminarEscogido(usuarioId: String){

    this.usuarioService.deleteUserId(usuarioId).subscribe(
      resp => {
        this.ngOnInit();

        },
      (err) => {
        console.log(err);
      }
    );
  }


  async alertaDeleteUser(usuario: Usuario) {
    const alert = await this.alertController.create({
      header: 'Eliminar usuario?',
      message: '<strong>Estás seguro que quieres elminar el usuario:<br><br>'+usuario.username+', <br></strong>',
      buttons: [
        {
          text: 'Cancelar',
        }, {
          text: 'Eliminar',
          handler: () => {
            console.log("id" + usuario._id);
            this.eliminarEscogido(usuario._id);
          }
        }
      ]
    });

    await alert.present();
  }


  recargar(event){

    this.usuarioService.getAllUsers().subscribe(
      resp => {
        console.log(resp);
        this.usuarios = resp;

        },
      (err) => {
        console.log(err);
      }
    );
    setTimeout(() => {

      event.target.complete();
    }, 2000);

  }





}
