import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenusuariosPage } from './menusuarios.page';

const routes: Routes = [
  {
    path: '',
    component: MenusuariosPage,
    children:[
      {
        path: 'home',
        loadChildren: () => import('src/app/pages/menusuarios/menusuarios.module').then(m => m.MenusuariosPageModule)
      },
      {
        path: 'listado',
        loadChildren: () => import('./listado/listado.module').then( m => m.ListadoPageModule)
      },
      {
        path: 'perfilt',
        loadChildren: () => import('./perfilt/perfilt.module').then( m => m.PerfiltPageModule)
      },
      {
        path: 'tuyos',
        loadChildren: () => import('./tuyos/tuyos.module').then( m => m.TuyosPageModule)
      },
      {
        path: 'otros',
        loadChildren: () => import('./otros/otros.module').then( m => m.OtrosPageModule)
      },
      {
        path: 'match',
        loadChildren: () => import('./match/match.module').then( m => m.MatchPageModule)
      },
    ]
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenusuariosPageRoutingModule {}
