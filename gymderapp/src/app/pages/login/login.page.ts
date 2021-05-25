import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';

import { UiServiceService } from 'src/app/services/ui-service.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import {Validator} from '../../interfaces/validator';

import { Socket } from 'ngx-socket-io';
import { Usuario } from 'src/app/interfaces/interfaces';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('slidePrincipal') slides: IonSlides;
  loginForm: FormGroup;
  registerForm: FormGroup;

  

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

  avatarSlide = {
    slidesPerView: 3.5,
  };

  loginUser = {
    email: '',
    password: '',
  };


  registerUser = {
    email: '',
    password: '',
    username:'',
    avatar:'av-1.png'
  };


  slideOpts: any = { allowTouchMove: false };

  LockSwipes(lock: boolean) {
    if (lock === true) {
      this.slideOpts = { allowTouchMove: true };
    } else {
      this.slideOpts = { allowTouchMove: false };
    }
  }
  usuario: Usuario = {};
  constructor(
    private usuarioService: UsuarioService,
    private navCtrl: NavController,
    private UiService: UiServiceService,
    private formBuilder: FormBuilder,
    private socket: Socket
  ) {
 
  }

  ngOnInit() {




    
    /* this.slides.lockSwipes( true ); */
    this.loginForm = this.formBuilder.group({
      //email: ['', [Validators.required, Validators.nullValidator, Validators.email]],
      email: [
        '',
        [Validators.required, Validators.nullValidator, Validators.email],
      ],
      //password: ['', [Validators.required, Validators.nullValidator]],
      password: [
        '',
        [Validators.required, Validators.nullValidator],
      ],

      //confirmpassword: ['', [Validators.required, Validators.nullValidator]],
     /*  fechanacimiento: ['', [Validators.pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/)]],
      fechavacunado: ['', [Validators.pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/)]],
      profesion: [''],
      vacuna: ['']  */
    });
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.nullValidator, Validators.email]],
      username: ['', [Validators.required, Validators.nullValidator]],
      password: ['', [Validators.required, Validators.nullValidator]],
      confirmpassword: [
        '',
        [Validators.required],
      ],

    },{validator: Validator.checkPassword});

  }
  
  async login() {
    console.log("logging");
    if (this.loginForm.invalid) {
      console.log("es invalido");
      return;
    }
    const valido = await this.usuarioService.login(
      this.loginForm.value.email,
      this.loginForm.value.password,
      
    );
console.log("valido", valido);
    if (valido) {
      this.navCtrl.navigateRoot('/main/tabs/tab1', { animated: true});
    
      
    } else {
      console.log('error');
      this.UiService.alertaInformativa('Usuario y contraseña no son correctas');

    }

  }

  contactUs(){
    this.navCtrl.navigateRoot('/login/contact-us', { animated: true});
  }

  registro() {

    if (this.registerForm.invalid) { return;}


    let userRegistered ={
      username: this.registerForm.value.username,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      avatar:  this.registerUser.avatar
    }
    console.log ("avatarescogido",userRegistered.avatar)
    this.usuarioService.registro(userRegistered).subscribe( data =>{
    localStorage.setItem('ACCESS_TOKEN', data['token']);
    console.log(data)
    this.navCtrl.navigateRoot('/main/tabs/tab1', { animated: true});
  }, err =>{
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.clear();
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

  mostrarRegistro() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }

  mostrarLogin() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
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


}
