import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tuyos',
  templateUrl: './tuyos.page.html',
  styleUrls: ['./tuyos.page.scss'],
})
export class TuyosPage implements OnInit {
  usuarios: Usuario[] = [];
  usuariosresp: Usuario[] = [];
  escogidos: Usuario[] = [];
  usuario:Usuario;
  constructor(private usuarioService: UsuarioService, private UiService: UiServiceService,  public alertController: AlertController ) { }

  ngOnInit() {
    this.usuario = this.usuarioService.getUsuario();


    this.usuarioService.getgymdertent().subscribe(
      resp => {

        this.usuariosresp = resp;
        this.usuariosresp.forEach(element => {
          if(element._id == this.usuario._id){
              this.usuarios = element.escogidopormi2
          }
        });


      },
      (err) => {
        console.log("error");
      }
    );

    this.usuarioService.getObservable().subscribe((data)=> {
      if (data.topic == "newEscogido"){
        console.log("refresh: ", data.data);
        this.usuarios.unshift(data.data);
      }
    });
  }



  escogido (usuarioId:Usuario){
    console.log("Anteior usuarios", this.usuarios)
    console.log("usuarioID", usuarioId)
    this.usuarios = this.usuarios.filter((i) => i._id !== usuarioId._id );
    console.log("nuevo usuarios", this.usuarios)
    this.escogidos.unshift(usuarioId);
    console.log("Escogidos",this.escogidos);

  }

  elimminarEscogido(usuarioId: Usuario){

    console.log("usuarioeliminado" , usuarioId)


    let escogido ={
      escogidopormi2: usuarioId._id
    }



    this.usuarioService.deleteUserGym(this.usuario._id, escogido ).subscribe(resp=>{

      this.usuarioService.publish({
        "topic":"deleteEscogido",
        "data": usuarioId
      })




    },
    (err)=>{
      console.log(err)
    })

    this.usuarios = this.usuarios.filter((i) => i._id !== usuarioId._id );

  }

  actualizarEscogido(usuarioId: String){
    console.log("usuarioactualizado" , usuarioId)
  }

  recargar(event){


    this.usuarioService.getgymdertent().subscribe(
      resp => {

        this.usuariosresp = resp;

        this.usuariosresp.forEach(element => {

          if(element._id == this.usuario._id){

              this.usuarios = element.escogidopormi2
          }
        });
      },
      (err) => {
        console.log("error");
      }
    );
    setTimeout(() => {

      event.target.complete();
    }, 2000);

  }


async alertaDeleteUser(username) {
  const alert = await this.alertController.create({
    header: 'Eliminar USUARIO?',
    message: '<strong>Estás seguro que quieres elminar el usuario:<br><br>'+username.username +'<br></strong>',
    buttons: [
      {
        text: 'Cancelar',
      }, {
        text: 'Eliminar',
        handler: () => {
          this.elimminarEscogido(username);
        }
      }
    ]
  });

  await alert.present();
}
}
