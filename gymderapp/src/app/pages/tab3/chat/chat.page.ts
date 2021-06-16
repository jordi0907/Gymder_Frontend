import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { Usuario, SolicitudAmistad } from 'src/app/interfaces/interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MenuController, ModalController, NavController, AlertController} from '@ionic/angular';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  solicitudAmistad: SolicitudAmistad = {};
  usuario: Usuario = {};
  amigos: Usuario[] = [];
  usuarioEnviar: string;
  texto: string;
  Enviarform : FormGroup;
  listaMensajes : any[] = [];
  listaUser:  Usuario [] = [];
  nsala: Number;
  email = '';
  
  constructor(private socket:Socket, 
    private usuarioService: UsuarioService, 
    private navCtrl: NavController, 
    private formBuilder: FormBuilder,
    public alertController: AlertController,
    public alerta: AlertController) { 
      
 
    console.log(socket);
    this.usuario= usuarioService.getUsuario();
    console.log(this.usuario);
    
  }

  

  

  ngOnInit() { 
    this.socket.emit('connection')
    this.socket.emit('me-conecto', this.usuario)
    this.listaAmigos();
    this.socket.on('listausuarios', (data) => 
    {
      this.listaUser = data;
      console.log('la lista de conectados es: ', data ) 
    });

    this.socket.on('messages', (data) => {
      this.listaMensajes = data;
      console.log("*", this.listaMensajes); 

    });  
    this.socket.on('invitacion2', (data, data2 ) => {
      this.nsala = data2;
      console.log("mi numero de sala es: invitado " + this.nsala);
      if(data == this.usuario.username){
      console.log("quieres recibir invitacion?"); 
      this.Invit();
      }

    }); 
    this.Enviarform = this.formBuilder.group({});
  }


  AddM() {   //envio de mensajes
    console.log(this.usuario.username);
    this.socket.emit('new-message-g', (this.usuario.username + ": " + this.texto))
    this.texto = "";

  }

  async Invit() {  //
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Has recibido una invitacion',
      message: 'Message <strong>Quieres aceptarla?</strong>!!!',
      buttons: [
        {
          text: 'Nah paso',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si, de locos',
          handler: () => {
            this.socket.emit('nsala', this.nsala)
            this.navCtrl.navigateRoot('/main/tabs/tab3/chat/privchat');
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
 

  NombreEnviar(usuarioEnviar) {  //lo usamos en el html 
    console.log(usuarioEnviar)
    this.socket.emit('invitacion', (usuarioEnviar))
    this.navCtrl.navigateRoot('/main/tabs/tab3/chat/privchat');
  }
  listaAmigos(){
    this.usuario = this.usuarioService.getUsuario();
    this.amigos=[];
     for(let id in this.usuario.amigos){    
     this.usuarioService.dameAmigo(this.usuario.amigos[id]).subscribe((data)=>{
      console.log(data);
      this.amigos.push(data);
      this.socket.emit('amigo agregado', this.amigos);
     
    })
  }
  

}

send() {
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







}

