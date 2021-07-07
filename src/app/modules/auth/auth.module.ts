import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AuthComponent } from './auth.component';
import { AuthFormComponent } from './components';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    AuthComponent,
    AuthFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
