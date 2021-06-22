import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsService } from 'src/app/services/posts.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
declare var window: any;

@Component({
  selector: 'app-perfilt',
  templateUrl: './perfilt.page.html',
  styleUrls: ['./perfilt.page.scss'],
})
export class PerfiltPage implements OnInit {
  tempImages: string[] = [];


  usuariosresp: Usuario[] = [];

  usuario:Usuario;
  post = {
    descripcion: '',
    participa: '',
  };
  usuarios: Usuario[] = [];
  constructor(private http: HttpClient,private postService : PostsService, private usuarioService: UsuarioService, private UiService:UiServiceService, private camera: Camera ) { }

  ngOnInit() {
    this.usuario = this.usuarioService.getUsuario();
    this.usuarioService.getgymdertent().subscribe(
      resp => {
        this.usuarios =[];

        this.usuariosresp = resp;

        this.usuariosresp.forEach(element => {

          if(element._id == this.usuario._id){

                this.usuario = element

            }


          }
        );
        console.log("otross", this.usuario);
      },
      (err) => {
        console.log("error");
      }
    );

  }

  crearPost(){
    console.log("noticia" , this.post)

   this.postService.crearPostPerfil( this.post).subscribe(
      resp => {

        console.log("resp", resp);

        this.post = {
          descripcion: '',
          participa:'',
        };

        this.tempImages = [];

        this.usuario = resp['post'];

        this.UiService.alertaInformativa('Todas las parejas que hagan match, tendrán clases y cena grupales resevadas el ultimo viernes de cada mes')



      },
      (err) => {
        console.log("error");
      }
    );
  }


  recargar(event){

    this.usuarioService.getgymdertent().subscribe(
      resp => {
       // this.usuarios =[];

        this.usuariosresp = resp;
        // this.posts.push( ...resp['data'] );
        this.usuariosresp.forEach(element => {

          if(element._id == this.usuario._id){



                // this.usuario.image=""
                this.usuario = element
                // this.usuario.image="6666zzz.png"


                // this.usuario.image = element.image


            }

            //  this.usuarios.push(...element.escogidopormi2)
              //this.usuarios = element.escogidopormi2
          }
        );


      },
      (err) => {
        console.log("error");
      }
    );
    setTimeout(() => {

      event.target.complete();
    }, 2000);

  }




  loadImageFromDevice(event) {
    console.log(event);
   console.log ("files", event.target.files[0])

   this.postService.subirImagen(event.target.files[0]);
   this.tempImages.push(event.target.files[0]);
  }

  private file: File;
  onFileChange(fileChangeEvent) {
    this.file = fileChangeEvent.target.files[0];


    let formData = new FormData();
    formData.append("photo", this.file, this.file.name);

this.http.post(​environment.url + `/postusuario/uploadperfil`, formData).subscribe((response) => {

});

  /*   this.http.post("http://localhost:3000/postusuario/uploadperfil", formData).subscribe((response) => {
      console.log("response", response);
    }); */
  }




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


}
