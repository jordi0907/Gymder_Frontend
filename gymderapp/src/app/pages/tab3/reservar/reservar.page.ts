import { ReservarService } from 'src/app/services/reservar.service';
import { Component, OnInit } from '@angular/core';
import {Sala} from 'src/app/interfaces/interfaces'

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.page.html',
  styleUrls: ['./reservar.page.scss'],
})
export class ReservarPage implements OnInit {
  salas :Sala[];
  constructor(private reservarService: ReservarService) { }

  ngOnInit() {
    this.salas = this.reservarService.getSalas();
  }

}
