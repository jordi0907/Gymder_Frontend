import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/interfaces';
import { NavController } from '@ionic/angular';

const URL = environment.url;

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuario: Usuario = {};

  token: string = null;

  constructor(
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
            this.guardarToken(resp['token']);
            resolve(true);
          } else {
            this.token = null;
            this.storage.clear();
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
    this.token = null;
    this.usuario = null;
    this.storage.clear();
    this.navCtrl.navigateRoot('/login', { animated: true });
  }

  async guardarToken(token: string) {
    this.token = token;
    await this.storage.set('token', token);
  }
}
