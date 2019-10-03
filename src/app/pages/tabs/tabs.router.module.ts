import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          },
          //PARA IR A LA RUTA DE UNA LISTA AL CREAR NUEVA LISTA PRESIONANDO EL BOTON + Y AL TOCAR EN UNA LISTA
          {
            path: 'agregar/:listaId',
            /* El loadChildren sale de app-routing.module.ts (se añade solo al crear el componente) */
            loadChildren: '../agregar/agregar.module#AgregarPageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          },
          //PARA IR A LA RUTA DE LA LISTA AL TOCAR EN DICHA LISTA
          {
            path: 'agregar/:listaId',
            /* El loadChildren sale de app-routing.module.ts (se añade solo al crear el componente) */
            loadChildren: '../agregar/agregar.module#AgregarPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
