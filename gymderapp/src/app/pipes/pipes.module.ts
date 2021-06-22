import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizerPipe } from './dom-sanitizer.pipe';
import { ImageSanitizerPipe } from './image-sanitizer.pipe';
import { ImagenPipe } from './imagen.pipe';
import { ImagenperfilPipe } from './imagenperfil.pipe';





@NgModule({
  declarations: [
    DomSanitizerPipe,
    ImageSanitizerPipe,
    ImagenPipe,
    ImagenperfilPipe
  ],
  exports: [ DomSanitizerPipe, ImageSanitizerPipe, ImagenPipe, ImagenperfilPipe ]
})
export class PipesModule { }
