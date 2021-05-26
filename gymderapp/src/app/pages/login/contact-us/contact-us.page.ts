import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, NavController, AlertController} from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
//import {EmailComposer} from '@ionic-native/email-composer/ngx'
import {MensajeContacto} from '../../../interfaces/interfaces'
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {

 mensajeContacto: MensajeContacto = {};





  subject= '';
  body= '';
  to= '';

  constructor(public navCtrl : NavController,
              private usuarioService: UsuarioService
              ) { }



  send(){

    this.mensajeContacto.to = this.to;
    this.mensajeContacto.bodyContent = this.body;
    this.mensajeContacto.subject = this.subject;

    console.log('este es el mensaje creado', this.mensajeContacto);
    this.usuarioService.contactUs(this.mensajeContacto).subscribe (data =>{
      
    }, 
    err => {
      console.log(err.status)

    })

    this.subject= '';
    this.body= '';
    this.to= '';
  
   
  }



  ngOnInit() {
  }

}
