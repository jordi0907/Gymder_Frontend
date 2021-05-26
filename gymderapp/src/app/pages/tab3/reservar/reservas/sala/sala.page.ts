import { ReservasPage } from './../reservas.page';
import { ReservarService } from 'src/app/services/reservar.service';
import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.page.html',
  styleUrls: ['./sala.page.scss'],
})
export class SalaPage implements OnInit {
  data:any;

  constructor(private reservaService:ReservarService) { }

  ngOnInit() {
   this.data = this.reservaService.getNavData()
  }
}
