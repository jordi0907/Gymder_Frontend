import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { NosotrosService } from '../nosotros.service';
import {Integrante} from '../integrante.model'
@Component({
  selector: 'app-integrante-detail',
  templateUrl: './integrante-detail.page.html',
  styleUrls: ['./integrante-detail.page.scss'],
})
export class IntegranteDetailPage implements OnInit {

  integrante: Integrante

  constructor(private router: ActivatedRoute,
    private nosotrosService: NosotrosService) { }

  ngOnInit() {


    this.router.paramMap.subscribe(paramMap => {
     const recipeId = paramMap.get('integranteId')
     this.integrante = this.nosotrosService.getIntegranteId(recipeId);
     console.log(this.integrante)

    })
  }

}
