import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LoadingComponent } from './loading.component';

@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
  ],
  exports: [
    LoadingComponent
  ],
})
export class LoadingModule { }
