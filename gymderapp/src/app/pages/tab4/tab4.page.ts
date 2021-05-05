import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';

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
    private formBuilder: FormBuilder
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
        [Validators.required, Validators.nullValidator],
      ],
    });
  }

  logout() {
    this.usuarioService.logout();
  }

  actualizar() {}



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

