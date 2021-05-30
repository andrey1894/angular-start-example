import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostInfoComponent, PostListComponent } from './containers';
import { PostComponent } from './post.component';

const routes: Routes = [
  {
    path: '',
    component: PostComponent,
    children: [
      { path: '', redirectTo: 'list' },
      { path: 'list', component: PostListComponent },
      { path: ':id', component: PostInfoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
