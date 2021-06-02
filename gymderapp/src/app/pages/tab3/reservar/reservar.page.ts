import { Socket } from 'ngx-socket-io';
import { Usuario, Post } from './../../../interfaces/interfaces';
import { UsuarioService } from './../../../services/usuario.service';
import { ReservarService } from 'src/app/services/reservar.service';
import { Component, OnInit } from '@angular/core';
import {Sala} from 'src/app/interfaces/interfaces'
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.page.html',
  styleUrls: ['./reservar.page.scss'],
})
export class ReservarPage implements OnInit {
  salas : Array<Sala> = []
  admin: boolean= false;
  mostrar: boolean = false;
  mensaje: String;
  usuario: Usuario ={};
  contReserva= 1;
  constructor(
    private reservarService: ReservarService,
    private usuarioService: UsuarioService,
    public alertController: AlertController,
    private socket:Socket) { }

  ngOnInit() {
    if(this.usuarioService.getUsuario().role == 1) this.admin=true;
    else this.admin = false;
    this.reservarService.getSalas().subscribe((salas :any) =>{
    if(salas['ok']==true){
      this.mostrar = true;
      this.salas = salas['salas'];
    }else if(salas['ok'] == false){
      this.mostrar= false;
      this.mensaje= salas['mensaje']
    }
    })
  }

  async presentAlertConfirm(mensaje) {
    const alert = await this.alertController.create({
      header: 'Opsss!',
      message: mensaje,
      buttons: [
        {
          text: 'Ok',
        }, 
      ]
    });

    await alert.present();
  }

  reservar(idSala:String){
    console.log(this.contReserva)
    this.reservarService.addReserva(idSala, this.usuario).subscribe(data =>{
      if(data['ok']==false) this.presentAlertConfirm(data['mensaje']);
      else this.contReserva++;
    });
    console.log("Aqui "+this.contReserva);
    if(this.contReserva ==2){
      this.usuarioService.putInsignias("Reserva 2 clases").subscribe(data=>{});
    }

  }

  deleteSala(id){
    this.reservarService.deleteSala(id).subscribe(async data =>{
      this.ngOnInit();
    })
  }

  async alertaDeleteSala(id,name,actividad) {
    const alert = await this.alertController.create({
      header: 'Eliminar reserva?',
      message: '<strong>Estás seguro que quieres elminar la sala:<br><br>'+name+', '+actividad+'<br></strong>',
      buttons: [
        {
          text: 'Cancelar',
        }, {
          text: 'Eliminar',
          handler: () => {
            this.deleteSala(id);
          }
        }
      ]
    });

    await alert.present();
  }

  doRefresh(event) {

    this.reservarService.getSalas().subscribe((salas :any) =>{
      if(salas['ok']==true){
        this.mostrar = true;
        this.salas = salas['salas'];
      }else if(salas['ok'] == false){
        this.mostrar= false;
        this.mensaje= salas['mensaje']
      }
      })
    setTimeout(() => {
      
      event.target.complete();
    }, 2000);
  }
}
