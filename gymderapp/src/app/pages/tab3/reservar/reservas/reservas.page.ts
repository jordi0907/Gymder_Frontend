import { ReservarService } from 'src/app/services/reservar.service';
import { Component, OnInit } from '@angular/core';
import {Sala} from 'src/app/interfaces/interfaces'
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage implements OnInit {
  reservas : Array<Sala> = []
  mostrar: boolean = false;
  mensaje: String;

  constructor(private reservarService: ReservarService,private navCtrl: NavController) { }

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

  delete(id){
    this.reservarService.deleteReserva(id).subscribe(async data =>{
      this.navCtrl.navigateRoot('/main/tabs/tab3/reservar', { animated: true});
    })
  }

}
