import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsuarioService} from '../../../../services/usuario.service'
import {Usuario} from '../../../../interfaces/interfaces'
import { Integrante } from '../../nosotros/integrante.model';

@Component({
  selector: 'app-amigo-detail',
  templateUrl: './amigo-detail.page.html',
  styleUrls: ['./amigo-detail.page.scss'],
})
export class AmigoDetailPage implements OnInit {
  usuario: Usuario = {};
  imagen: String;

  constructor(private router: ActivatedRoute,
    private usuarioServie: UsuarioService) { }

  ngOnInit() {
    this.router.paramMap.subscribe(paraMap => {
      const reciId = paraMap.get('username')
      this.usuarioServie.getUser(reciId).subscribe((data) => {
    
        this.usuario = data; 
        console.log('este usuario', this.usuario);
        this.imagen = "/assets/avatars/"+this.usuario.avatar;
        
      })
    })
  }

}
