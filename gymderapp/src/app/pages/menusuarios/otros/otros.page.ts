import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-otros',
  templateUrl: './otros.page.html',
  styleUrls: ['./otros.page.scss'],
})
export class OtrosPage implements OnInit {
  usuarios: Usuario[] = [];
  usuariosresp: Usuario[] = [];
  escogidos: Usuario[] = [];
  usuario:Usuario;
  constructor(private usuarioService: UsuarioService, private UiService: UiServiceService,  public alertController: AlertController ) { }

  ngOnInit() {
    this.usuario = this.usuarioService.getUsuario();


    this.usuarioService.getgymdertent().subscribe(
      resp => {
        this.usuarios =[];

        this.usuariosresp = resp;

        this.usuariosresp.forEach(element => {

          if(element._id !== this.usuario._id){

            element.escogidopormi2.forEach(element2 =>{

               if (element2._id == this.usuario._id)
              {

                this.usuarios.push(element)
              }
            })


          }
        });

      },
      (err) => {
        console.log("error");
      }
    );
  }



  escogido (usuarioId:Usuario){
    console.log("Anteior usuarios", this.usuarios)
    console.log("usuarioID", usuarioId)
    this.usuarios = this.usuarios.filter((i) => i._id !== usuarioId._id );
    console.log("nuevo usuarios", this.usuarios)
    this.escogidos.unshift(usuarioId);
    console.log("Escogidos",this.escogidos);

  }

  elimminarEscogido(usuarioId: String){

    console.log("usuarioeliminado" , usuarioId)
    this.usuarioService.deletegymdertent(usuarioId).subscribe(resp=>{
      console.log("resp eliminado", resp);
      this.ngOnInit();
    },
    (err)=>{
      console.log(err)
    })
  }

  actualizarEscogido(usuarioId: String){
    console.log("usuarioactualizado" , usuarioId)
  }

  recargar(event){

    this.usuarioService.getgymdertent().subscribe(
      resp => {
        this.usuarios =[];
        console.log("resp", resp);
        this.usuariosresp = resp;

        this.usuariosresp.forEach(element => {

          if(element._id !== this.usuario._id){

            element.escogidopormi2.forEach(element2 =>{

               if (element2._id == this.usuario._id)
              {

                this.usuarios.push(element)
              }
            })


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
    message: '<strong>Estás seguro que quieres elminar el usuario:<br><br>'+username+'<br></strong>',
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
