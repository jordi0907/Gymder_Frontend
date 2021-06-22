import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-match',
  templateUrl: './match.page.html',
  styleUrls: ['./match.page.scss'],
})
export class MatchPage implements OnInit {
  usuarios: Usuario[] = [];
  usuariosresp: Usuario[] = [];
  escogidos: Usuario[] = [];
  usuariosescogidos: Usuario[]=[];
  usuario:Usuario;
  usuarioactualizao:Usuario;
  listadousuariosmatch:Usuario[] = [];

  constructor(private usuarioService: UsuarioService, private UiService: UiServiceService,  public alertController: AlertController ) { }

  ngOnInit() {
    this.usuario = this.usuarioService.getUsuario();
    console.log('el usuario dentro del tab4', this.usuario);

    // this.usuarioService.getgymdertent().subscribe(
    //   resp => {
    //     this.usuarios =[];
    //     console.log("resp", resp);
    //     this.usuariosresp = resp;
    //     // this.posts.push( ...resp['data'] );
    //     this.usuariosresp.forEach(element => {
    //       console.log("elementID", element._id)
    //       console.log("this.usuario._id", this.usuario._id)
    //       if(element._id !== this.usuario._id){
    //         console.log("element.escogidopormi2", element.escogidopormi2)
    //         element.escogidopormi2.forEach(element2 =>{
    //           console.log("ususarios element.escogidopormi2", element2)
    //            if (element2._id == this.usuario._id)
    //           {
    //             console.log("usuario añadidio otros", element)
    //             this.usuarios.push(element)
    //           }
    //         })

    //         //  this.usuarios.push(...element.escogidopormi2)
    //           //this.usuarios = element.escogidopormi2
    //       }
    //     });
    //     console.log("otross", this.usuarios);
    //   },
    //   (err) => {
    //     console.log("error");
    //   }
    // );


    this.usuarioService.getgymdertent().subscribe(
      resp => {
        this.usuariosescogidos =[];
        console.log("resp", resp);
        this.usuariosresp = resp;
        // this.posts.push( ...resp['data'] );
        this.usuariosresp.forEach(element => {
          console.log("elementID", element._id)
          console.log("this.usuario._id", this.usuario._id)
          if (element._id == this.usuario._id){this.usuarioactualizao = element}
          if(element._id !== this.usuario._id){
            element.escogidopormi2.forEach(element2 =>{
              if (element2._id == this.usuario._id)
              {
                this.usuariosescogidos.push(element)
              }
            })

            //  this.usuarios.push(...element.escogidopormi2)
              //this.usuarios = element.escogidopormi2
          }
        });
        console.log("otross", this.usuariosescogidos);
        console.log("mi usuario", this.usuarioactualizao)
        console.log("mios", this.usuarioactualizao.escogidopormi2)


        let yFilter = this.usuariosescogidos.map(itemY => { return itemY._id; });


        this.listadousuariosmatch = this.usuarioactualizao.escogidopormi2.filter(itemX => yFilter.includes(itemX._id));

        console.log("MATCH", this.listadousuariosmatch);
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
    // pull = true es que se envia para hacer un refresher
    console.log(" Se ha realizado el refresh")
    this.usuarioService.getgymdertent().subscribe(
      resp => {
        this.usuariosescogidos =[];
        console.log("resp", resp);
        this.usuariosresp = resp;
        // this.posts.push( ...resp['data'] );
        this.usuariosresp.forEach(element => {
          console.log("elementID", element._id)
          console.log("this.usuario._id", this.usuario._id)
          if (element._id == this.usuario._id){this.usuarioactualizao = element}
          if(element._id !== this.usuario._id){
            element.escogidopormi2.forEach(element2 =>{
              if (element2._id == this.usuario._id)
              {
                this.usuariosescogidos.push(element)
              }
            })

            //  this.usuarios.push(...element.escogidopormi2)
              //this.usuarios = element.escogidopormi2
          }
        });
        console.log("otross", this.usuariosescogidos);
        console.log("mi usuario", this.usuarioactualizao)
        console.log("mios", this.usuarioactualizao.escogidopormi2)


        let yFilter = this.usuariosescogidos.map(itemY => { return itemY._id; });


        this.listadousuariosmatch = this.usuarioactualizao.escogidopormi2.filter(itemX => yFilter.includes(itemX._id));


        console.log("MATCH", this.listadousuariosmatch);
      },
      (err) => {
        console.log("error");
      }
    );
    setTimeout(() => {

      event.target.complete();
    }, 2000);


    // this.usuarioService.getgymdertent().subscribe(
    //   resp => {
    //     this.usuarios =[];
    //     console.log("resp", resp);
    //     this.usuariosresp = resp;
    //     // this.posts.push( ...resp['data'] );
    //     this.usuariosresp.forEach(element => {
    //       // console.log("elementID", element._id)
    //       // console.log("this.usuario._id", this.usuario._id)
    //       console.log(" element ", element)
    //       if(element._id !== this.usuario._id){
    //         console.log("if !== valido")
    //        // console.log("element.escogidopormi2", element.escogidopormi2)
    //         element.escogidopormi2.forEach(element2 =>{
    //           console.log("element2", element2)
    //            if (element2._id == this.usuario._id)
    //           {
    //             console.log("usuario añadidio otros", element)
    //             this.usuarios.push(element)
    //           }
    //         })

    //         //  this.usuarios.push(...element.escogidopormi2)
    //           //this.usuarios = element.escogidopormi2
    //       }
    //     });
    //     console.log("otross", this.usuarios);
    //   },
    //   (err) => {
    //     console.log("error");
    //   }
    // );
    // setTimeout(() => {

    //   event.target.complete();
    // }, 2000);






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
