import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'

import { NotificationComponent } from './notification.component'

@NgModule({
  declarations: [NotificationComponent],
  imports: [
    CommonModule,
    TranslateModule,
  ],
  exports: [NotificationComponent],
})
export class NotificationModule {}
