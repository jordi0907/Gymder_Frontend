import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL = environment.url

@Pipe({
  name: 'imagenperfil'
})
export class ImagenperfilPipe implements PipeTransform {
  constructor( private http: HttpClient){}

  transform(img:string, userId: string): any {
    console.log("img", img)
   return `${URL}/postusuario/imagenperfil/${userId}/${img}`;


  }

}
