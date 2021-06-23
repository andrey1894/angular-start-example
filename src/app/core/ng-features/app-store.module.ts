import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { ROOT_MODULES } from '@env/environment'

import { UserModule } from './user'

@NgModule({
  imports: [
    StoreModule.forRoot([]),
    EffectsModule.forRoot([]),
    ...ROOT_MODULES,
    UserModule,
  ]
})
export class AppStoreModule {}
