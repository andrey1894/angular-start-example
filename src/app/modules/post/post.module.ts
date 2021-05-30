import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/index';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { PostListComponent, PostInfoComponent } from './containers';

@NgModule({
  declarations: [
    PostComponent,
    PostListComponent,
    PostInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PostRoutingModule
  ],
})
export class PostModule { }
