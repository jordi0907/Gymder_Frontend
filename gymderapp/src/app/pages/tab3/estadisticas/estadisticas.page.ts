import { Component, OnInit } from '@angular/core';
import {Usuario, mensajeSala} from 'src/app/interfaces/interfaces';
import {UsuarioService} from 'src/app/services/usuario.service'
@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
})
export class EstadisticasPage implements OnInit {
  

  listaUser: any [] = []
  sizeUsers : any
  listaSala: any[] =[]
  sizeSala: any
 
  mensaje: mensajeSala = {}
  
 
  constructor(
    private usuarioService: UsuarioService
  ) { }

  getAllUsuarios(){
    this.usuarioService.allUsers().subscribe( data =>{
      this.listaUser = data 
      console.log('lista? ', this.listaUser);
      this.sizeUsers = this.listaUser.length



    })
  }

  getAllSalas(){

    this.usuarioService.allSalas().subscribe(data => {
      this.mensaje = data;
      console.log('hola', this.mensaje.salas);
      this.sizeSala = this.mensaje.salas.length
      
      
      
    })

  }




  

  ngOnInit() {
    this.getAllUsuarios();
    this.getAllSalas();
  }


  

}
