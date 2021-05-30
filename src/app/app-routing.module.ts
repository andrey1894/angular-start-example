import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home').then(m => m.HomeModule)
  },
  {
    path: 'post',
    loadChildren: () => import('./modules/post').then(m => m.PostModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth').then(m => m.AuthModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./modules/not-found').then(m => m.NotFoundModule)
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
