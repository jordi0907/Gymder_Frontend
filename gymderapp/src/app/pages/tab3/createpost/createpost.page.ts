import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.page.html',
  styleUrls: ['./createpost.page.scss'],
})
export class CreatepostPage implements OnInit {
  tempImages: string[] = [];
  cargandoGeo = false;
  post = {
    mensaje: '',
    coords: null,
    posicion: false,
  };

  constructor(private postService: PostsService, private router: Router, private geolocation: Geolocation) {}

  ngOnInit() {}

  crearPost() {
    console.log(this.post);
    this.postService.crearPost(this.post).subscribe(
      (resp) => {
        console.log("res", resp)
        this.postService.crearEvent(resp['post'])
        this.post = {
          mensaje: '',
          coords: null,
          posicion: false,
        };
        this.router.navigateByUrl('/main/tabs/tab1')
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getGeo(){
    if( !this.post.posicion ){
      this.post.coords = null;
      return;
    }

    this.cargandoGeo = true;

    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.cargandoGeo = false;

      const coords = `${ resp.coords.latitude},${ resp.coords.longitude }`;
      console.log(coords);
      this.post.coords = coords;
     }).catch((error) => {
       console.log('Error getting location', error);
       this.cargandoGeo = false;
     });


  }






































}
