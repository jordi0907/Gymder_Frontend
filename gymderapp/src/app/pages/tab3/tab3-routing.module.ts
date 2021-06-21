//import { NgModule } from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';
//import { Tab3Page } from './tab3.page';

//const routes: Routes = [
 // {
   // path: '',
   // component: Tab3Page,
 // },
  //{
   // path: 'reservar',
   // loadChildren: () => import('./reservar/reservar.module').then( m => m.ReservarPageModule)
 // },
  //{
   // path: 'chat',
  //  loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
 // },
  //{
   // path: 'nosotros',
   // children: [
     // {
     //   path:"",
     //   loadChildren: () => import('./nosotros/nosotros.module').then( m => m.NosotrosPageModule)
     // },
     // {
      //  path: ":integranteId",
     //   loadChildren: () =>
       //   import("./nosotros/integrante-detail/integrante-detail.module").then(
         //   m => m.IntegranteDetailPageModule
      //    )
    //  }
    // ]
  //},
  // {
  //  path: 'perfil',
  //  loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  //}


//];

//@NgModule({
  //imports: [RouterModule.forChild(routes)],
  //exports: [RouterModule]
//})


//export class Tab3PageRoutingModule {}


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
  },
  {
    path: 'reservar',
    loadChildren: () => import('./reservar/reservar.module').then( m => m.ReservarPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'createpost',
    loadChildren: () => import('./createpost/createpost.module').then( m => m.CreatepostPageModule)

  },
  {
    path: 'nosotros',
    children: [
      {
        path:"",
        loadChildren: () => import('./nosotros/nosotros.module').then( m => m.NosotrosPageModule)
      },
      {
        path: ":integranteId",
        loadChildren: () =>
        import("./nosotros/integrante-detail/integrante-detail.module").then(
          m => m.IntegranteDetailPageModule
          )
        }
      ]
  },
  {
    path: 'horarios',
    loadChildren: () => import('./horarios/horarios.module').then( m => m.HorariosPageModule)
  },
  {
    path: 'amigos',
    loadChildren: () => import('./amigos/amigos.module').then( m => m.AmigosPageModule)
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
