import { Component, OnInit } from '@angular/core';
import {UsuarioService} from 'src/app/services/usuario.service'
import { MenuController, ModalController, NavController, AlertController} from '@ionic/angular';
import {SolicitudAmistad, Usuario} from '../../../interfaces/interfaces'
@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.page.html',
  styleUrls: ['./amigos.page.scss'],
})
export class AmigosPage implements OnInit {
  solicitudAmistad: SolicitudAmistad = {};
  email = '';
  usuario: Usuario = {};
  amigo: Usuario = {};
  amigos: Usuario[] = [];
  avatar:string;

  constructor(public usuarioService: UsuarioService,
    public alerta:AlertController) { }

  send () {
    this.solicitudAmistad.emailAmigo=this.email;
    console.log('este es el email' + this.email);
    this.usuario = this.usuarioService.getUsuario();
    console.log('este es el id' + this.usuario._id);

    this.solicitudAmistad.idInvitador = this.usuario._id;
    console.log( this.solicitudAmistad );
     
    this.usuarioService.addAmigo(this.solicitudAmistad).subscribe (response =>{
      
      console.log('respuesta es', response);


    },

    err => {
      console.log(err);
      if (err){
      this.alertaError();
      }

   

    }

    )

    
    this.email = '';
    this.listaAmigos();



  }

  async alertaError(){ 
    const alertaerror = await this.alerta.create({
     header: 'Usuario no existe o ya lo has agregado!',
     subHeader: '',
     message: '',
     buttons: ['OK']
    });
  
   await alertaerror.present();
  }

  


  

  ngOnInit() {
    this.listaAmigos()  }
    

    listaAmigos(){
      this.usuario = this.usuarioService.getUsuario();
    
     for(let id in this.usuario.amigos){
      
      
     // this.amigos.push(this.usuarioService.dameAmigo(this.usuario.amigos[id]));
     this.usuarioService.dameAmigo(this.usuario.amigos[id]).subscribe((data)=>{
      console.log(data);
      this.amigo = data;
      this.avatar = '/assets/avatars/'+this.amigo.avatar;

      this.amigos.push(this.amigo);

      

    })


   



       
     }
    
 
   }
 
}
