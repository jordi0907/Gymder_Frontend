import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { AlertController } from '@ionic/angular';
import { element } from 'protractor';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {
  usuarios: Usuario[] = [];
  escogidos: Usuario[] = [];
  usuariosresp: Usuario[] = [];
  usuario:Usuario;
  constructor(private usuarioService: UsuarioService, private UiService: UiServiceService,  public alertController: AlertController ) { }

  ngOnInit() {
    this.usuario = this.usuarioService.getUsuario();

    this.usuarioService.getgymdertent().subscribe(
      resp => {

        this.usuarios = resp;
        this.usuarios.forEach(element => {

          if(element._id == this.usuario._id && element.participa=="si"){
           this.usuariosresp = element.escogidopormi2
          }
        });

      let yFilter = this.usuariosresp.map(itemY => { return itemY._id; });

      let escogidosxm = this.usuario.escogidopormi2.map(itemY => { return itemY; });

      let filteredX = this.usuarios.filter(itemX => !yFilter.includes(itemX._id));

      let result = filteredX.filter(i => (i._id !== this.usuario._id ) && (i.participa == "si") );


      this.usuarios = result;

      },
      (err) => {
        console.log("error");
      }
    );
    this.usuarioService.getObservable().subscribe((data)=> {
      if (data.topic == "deleteEscogido"){
        this.usuarios.unshift(data.data);
      }
    });






  }



  escogido (usuarioId:Usuario){

    this.usuarios = this.usuarios.filter((i) => i._id !== usuarioId._id );
    this.escogidos.unshift(usuarioId);

    let escogido ={
      escogidopormi2: usuarioId._id,
    }

    this.usuarioService.updateUserGym(this.usuario._id, escogido ).subscribe(resp=>{
      console.log("resp eliminado", resp);
      this.usuarioService.publish({
        "topic":"newEscogido",
        "data": usuarioId
      })


    },
    (err)=>{
      console.log(err)
    })

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

        this.usuarios = resp;

        this.usuarios.forEach(element => {

          if(element._id == this.usuario._id && element.participa=="si"){
            this.usuariosresp = element.escogidopormi2
          }
        });


      let yFilter = this.usuariosresp.map(itemY => { return itemY._id; });
      let filteredX = this.usuarios.filter(itemX => !yFilter.includes(itemX._id));
      let result = filteredX.filter(i => (i._id !== this.usuario._id ) && (i.participa == "si") );

      this.usuarios = result;

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
