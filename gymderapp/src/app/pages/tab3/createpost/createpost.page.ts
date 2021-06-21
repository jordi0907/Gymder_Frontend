import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';


declare var window: any;

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

  constructor(private postService: PostsService, private router: Router, private geolocation: Geolocation, private camera: Camera, private http: HttpClient) {}

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
        this.tempImages = [];
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

<<<<<<< HEAD
=======

  camara(){

    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation:true,
      sourceType: this.camera.PictureSourceType.CAMERA
    }

    this.procesarImagen(options);

  }

  libreria(){

    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation:true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.procesarImagen(options);

  }


  procesarImagen(options: CameraOptions){
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      //let base64Image = 'data:image/jpeg;base64,' + imageData;
      const img = window.Ionic.WebconverFileSrc(imageData);

      console.log(img);
     // this.postService.subirImagen(imageData);

      this.tempImages.push(img);
     }, (err) => {
      // Handle error
     });
  }


  private file: File;
  onFileChange(fileChangeEvent) {
    this.file = fileChangeEvent.target.files[0];
    console.log ("this file", this.file)
    console.log("############### onfilechange")

    let formData = new FormData();
    // formData.append("photo", this.file, this.file.name);
    formData.append("image", this.file, this.file.name);
​
    this.http.post(environment.url + `/postusuario/upload`, formData).subscribe((response) => {
      console.log("response", response);
    });
  }







































>>>>>>> b4a5c590a5a9c9ef45ee455ee12ce6927bf278f4
}
