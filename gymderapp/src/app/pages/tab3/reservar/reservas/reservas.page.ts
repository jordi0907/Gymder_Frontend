import { ReservarService } from 'src/app/services/reservar.service';
import { Component, OnInit } from '@angular/core';
import {Sala} from 'src/app/interfaces/interfaces'
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage implements OnInit {
  reservas : Array<Sala> = []
  mostrar: boolean = false;
  mensaje: String;

  constructor(
    private reservarService: ReservarService,
    public alertController: AlertController,
    private router: Router) { }

  ngOnInit() {
    this.reservarService.getReservas().subscribe((reservas :any) =>{
      if(reservas['ok']==true){
        this.mostrar = true;
        this.reservas = reservas['reservas'];
      }else if(reservas['ok'] == false){
        this.mostrar= false;
        this.mensaje= reservas['mensaje']
      }
      })
  }
  ionViewWillEnter(){
    this.ngOnInit();
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

  sendData(data){
    this.reservarService.setNavData(data);
    this.router.navigate(['/main/tabs/tab3/reservar/reservas/sala/'+data._id])
  }

}
