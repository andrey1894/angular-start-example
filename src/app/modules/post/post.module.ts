import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/index';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';

import { PostListComponent, PostInfoComponent } from './containers';
import { PostTemplateComponent } from './components';

@NgModule({
  declarations: [
    PostComponent,
    PostListComponent,
    PostInfoComponent,
    PostTemplateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PostRoutingModule
  ],
})
export class PostModule { }
