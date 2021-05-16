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
  constructor(
    private reservarService: ReservarService,
    private usuarioService: UsuarioService,
    public alertController: AlertController) { }

  ngOnInit() {
<<<<<<< HEAD
    if(this.usuarioService.getUsuario().role == 1) this.admin=true;
    else this.admin = false;
=======
    this.usuarioService.getUsuario();
    console.log('',this.usuarioService.getUsuario())
>>>>>>> e4d415c4cfeb0f972a4463111931378f732440cf
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
    
    this.reservarService.addReserva(idSala, this.usuario).subscribe(data =>{
      if(data['ok']==false) this.presentAlertConfirm(data['mensaje']);
    });
  }

  deleteSala(id){
    this.reservarService.deleteSala(id).subscribe(async data =>{
      this.ngOnInit();
    })
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
