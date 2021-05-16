import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import {Validator} from '../../interfaces/validator';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  usuario: Usuario = {};
  editarPerfilForm: FormGroup;
  passwordinput = 'password';
  confirmpasswordinput = 'password';
  iconpassword = "eye-off";
  iconconfirmpassword = "eye-off";
  passwordDefecto: string;

  avatars = [
    {
      img: 'av-1.png',
      seleccionado: true,
    },
    {
      img: 'av-2.png',
      seleccionado: false,
    },
    {
      img: 'av-3.png',
      seleccionado: false,
    },
    {
      img: 'av-4.png',
      seleccionado: false,
    },
    {
      img: 'av-5.png',
      seleccionado: false,
    },
    {
      img: 'av-6.png',
      seleccionado: false,
    },
    {
      img: 'av-7.png',
      seleccionado: false,
    },
    {
      img: 'av-8.png',
      seleccionado: false,
    },
  ];

  registerUser = {
    avatar:''
  };

  avatarSlide = {
    slidesPerView: 3.5,
  };

  constructor(
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private UiService: UiServiceService,
  ) {}
  ngOnInit() {

    this.usuario = this.usuarioService.getUsuario();
    console.log('el usuario dentro del tab4', this.usuario);

    this.editarPerfilForm = this.formBuilder.group({
      email: [
        this.usuario.email,
        [Validators.required, Validators.nullValidator, Validators.email],
      ],
      nombre: [
        this.usuario.username,
        [Validators.required, Validators.nullValidator],
      ],
      password: [
        'Cambiar contraseña aquí',
        [Validators.required, Validators.nullValidator],
      ],
      confirmpassword: [
        'Cambiar contraseña aquí',
        [Validators.required],
      ],
    },{validator: Validator.checkPassword});
  }

  logout() {
    this.usuarioService.logout();
  }

  actualizar() {
    if (this.editarPerfilForm.invalid) { return;}
    if(this.editarPerfilForm.value.password == "Cambiar contraseña aquí"){
      this.passwordDefecto = null;
      console.log("La contraseña es", this.editarPerfilForm.value.password);
    }else{
      this.passwordDefecto = this.editarPerfilForm.value.password
    }

    let userRegistered ={
      username: this.editarPerfilForm.value.nombre,
      email: this.editarPerfilForm.value.email,
      password: this.passwordDefecto,
      avatar:  this.registerUser.avatar || this.usuario.avatar
    }
    console.log (userRegistered);
    this.usuarioService.updatePerfil(userRegistered).subscribe( data =>{
    localStorage.setItem('ACCESS_TOKEN', data['token']);
    console.log("he guardado el token", data)
    this.UiService.alertaInformativa('Usuario y contraseña actualizado');
  }, err =>{
    localStorage.removeItem('ACCESS_TOKEN');
   // localStorage.clear();
    console.log("error");
    if (err.status == 400) { console.log("404")}
    this.UiService.alertaInformativa('Usuario y contraseña no son correctas');
    } )


  }



seleccionarAvatar(avatar) {
  this.avatars.forEach((av) => (av.seleccionado = false));
  avatar.seleccionado = true;
  this.registerUser.avatar = avatar.img;
}


VistaPassword(){
  if (this.passwordinput == "password"){
    this.passwordinput = "text";
  }
  else{
    this.passwordinput = "password"
  }

  if (this.iconpassword == "eye-off"){
    this.iconpassword = "eye";
  }
  else{
    this.iconpassword = "eye-off";
  }
}

VistaConfirmPassword(){
  if (this.confirmpasswordinput == "password"){
    this.confirmpasswordinput = "text";
  }
  else{
    this.confirmpasswordinput = "password"
  }

  if (this.iconconfirmpassword == "eye-off"){
    this.iconconfirmpassword = "eye";
  }
  else{
    this.iconconfirmpassword = "eye-off";
  }
}

get formControls(){
  return this.editarPerfilForm.controls;
}

















}

