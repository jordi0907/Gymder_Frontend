import { ReservarService } from 'src/app/services/reservar.service';
import { Component, OnInit } from '@angular/core';
import {Sala} from 'src/app/interfaces/interfaces'
import { AlertController } from '@ionic/angular';
import { MenuController, ModalController, NavController} from '@ionic/angular';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage implements OnInit {
  reservas : Array<Sala> = []
  mostrar: boolean = false;
  mensaje: String;

  constructor(private socket:Socket,
    private reservarService: ReservarService,
    private navCtrl: NavController,
    public alertController: AlertController) { }

  ngOnInit() {
    this.reservarService.getReservas().subscribe((reservas :any) =>{
      console.log(reservas)
      if(reservas['ok']==true){
        this.mostrar = true;
        this.reservas = reservas['reservas'];
       
      }else if(reservas['ok'] == false){
        this.mostrar= false;
        this.mensaje= reservas['mensaje']
      }
      })
  }
 irChat(id) {   
  //ir al chat
  console.log(id)
  this.socket.emit('nsala', id)
  this.navCtrl.navigateRoot('/main/tabs/tab3/reservar/reservas/chat-reservas');
  }

  async presentAlertConfirm(id) {
    const alert = await this.alertController.create({
      header: 'Eliminar reserva?',
      message: '<strong>Estás seguro que quieres elminar la reserva?<br><br> Recuerda que el aforo es limitado.</strong>',
      buttons: [
        {
          text: 'Cancelar',
        }, {
          text: 'Eliminar',
          handler: () => {
            this.delete(id);
          }
        }
      ]
    });

    await alert.present();
  }

  delete(id){
    this.reservarService.deleteReserva(id).subscribe(async data =>{
      this.ngOnInit();
    })
  }

}
