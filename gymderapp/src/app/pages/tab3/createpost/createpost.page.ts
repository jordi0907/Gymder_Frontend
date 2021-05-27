import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.page.html',
  styleUrls: ['./createpost.page.scss'],
})
export class CreatepostPage implements OnInit {
  tempImages: string[] = [];
  post = {
    mensaje: '',
    coords: null,
    posicion: false,
  };

  constructor(private postService: PostsService, private router: Router) {}

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
}
