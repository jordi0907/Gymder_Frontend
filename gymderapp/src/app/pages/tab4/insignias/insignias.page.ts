import { UsuarioService } from 'src/app/services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/interfaces';
@Component({
  selector: 'app-insignias',
  templateUrl: './insignias.page.html',
  styleUrls: ['./insignias.page.scss'],
})
export class InsigniasPage implements OnInit {
  insignias : Array<any> = []
  mostrar: boolean = false;
  mensaje: String;
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getInsignias().subscribe((insignias:any)=>{
      console.log(insignias)
      if(insignias['ok']==true){
        this.mostrar = true;
        this.insignias = insignias['insignias'];
      }else if(insignias['ok'] == false){
        this.mostrar= false;
        this.mensaje= insignias['mensaje']
      }
    })
  }

}
