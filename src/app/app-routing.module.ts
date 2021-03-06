import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard, UserGuard } from '@core/guards';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home').then(m => m.HomeModule),
    canActivate: [UserGuard]
  },
  {
    path: 'post',
    loadChildren: () => import('./modules/post').then(m => m.PostModule),
    canActivate: [UserGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth').then(m => m.AuthModule),
    canActivate: [AuthGuard]
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
