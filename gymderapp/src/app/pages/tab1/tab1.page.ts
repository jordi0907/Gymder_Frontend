import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Socket } from 'ngx-socket-io';
import { Post, Usuario } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  usuario1: Usuario;
  posts: Post[] = [];

  habilitado = true;




  constructor(
    private socket:Socket,
    private postService: PostsService
    ) {}

  ngOnInit() {
    this.siguientes();
    this.postService.nuevoPost.subscribe( post=>{
      this.posts.unshift( post );

    })


  }
  recargar(event){

    this.siguientes( event, true );
    this.habilitado = true;
      this.posts = [];
  }

  logout() {

  }

  siguientes( event?, pull: boolean = false ) {

    this.postService.getPost( pull ).subscribe(
      resp => {
        console.log(resp);
        this.posts.push( ...resp.posts);

        if (event){
          event.target.complete();

          if(resp.posts.length == 0){
            this.habilitado = false;
          }
        }
      },
      (err) => {
        console.log(err);
      }
    );



  }


}
