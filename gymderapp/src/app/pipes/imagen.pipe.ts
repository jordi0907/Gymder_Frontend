import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  constructor( private http: HttpClient){}

  transform(img:string, userId: string): any {
   return `${URL}/postusuario/imagen/${userId}/${img}`;



    // this.http.get<string>(`${URL}/postusuario/imagen/${userId}/${img}`).subscribe(data=> {
    //   console.log("data", data)
    //   return data

    // }, err =>{

    //   console.log("error", err)
    //   } )


      // return `${URL}/postusuario/imagen/${userId}/${img}`;

  }
}
