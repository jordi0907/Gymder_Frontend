import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/interfaces';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import {UiServiceService} from '../services/ui-service.service'

const URL = environment.url;

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuario: Usuario = {};

 token: string = null;

  constructor(
    private uiService: UiServiceService,
    private http: HttpClient,
    private storage: Storage,
    private navCtrl: NavController
  ) {
    this.init();
  }

  async init() {
    const storage2 = await this.storage.create();
    this.storage = storage2;
  }

  login(email: string, password: string) {
    const data = { email, password };

    return new Promise((resolve, reject) => {
      this.http.post(`${URL}/auth/signin`, data).subscribe(
        (resp) => {
          console.log(resp);

          if (resp['ok'] === true) {
            //this.guardarToken(resp['token']);
            localStorage.setItem("ACCESS_TOKEN", resp['token']);
            resolve(true);
          } else {
            //this.token = null;
            //this.storage.clear();
            localStorage.removeItem("ACCESS_TOKEN");
            localStorage.clear();
            resolve(false);
          }
        },
        (error) => {
          resolve(false);
        }
      );
    });
  }

   logout() {
    //this.token = null;
    //this.usuario = null;
    //this.storage.clear();
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.clear();
    this.navCtrl.navigateRoot('/login', { animated: true });
  }

  async guardarToken(token: string) {
    this.token = token;
    await this.storage.set('token', token);
  }

  registro(nuevoresultado: Usuario): Observable<any>{
    return this.http.post(environment.url + '/auth/signup', nuevoresultado);
  }


   public  isLoggedIn(){

    return localStorage.getItem("ACCESS_TOKEN") !== null;
  }

  public getToken(){
    return localStorage.getItem("ACCESS_TOKEN");
  }

  getMe(): void{
    this.http.get<Usuario>(environment.url + '/auth/me').subscribe(user=> {
      this.usuario = user['user'];

    }, err =>{

      this.uiService.alertaInformativa('Error en la conexión');
      } )
  }

  getUsuario(){
    return {...this.usuario}

  }




}
