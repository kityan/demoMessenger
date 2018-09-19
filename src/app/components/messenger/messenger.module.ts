import { NgModule } from '@angular/core'
import { RouterModule, Route } from '@angular/router'
import { CommonModule } from '@angular/common'

import { MessengerComponent } from './messenger/messenger.component'
import { MessengerExtraComponent } from './messenger-extra/messenger-extra.component'
import { MessengerUserListComponent } from './messenger-user-list/messenger-user-list.component'
import { MessengerHistoryComponent } from './messenger-history/messenger-history.component'
import { ApiManagerService } from '../../services/api-manager.service'
import { HttpClientModule } from '@angular/common/http'


const routes: Route[] = [
  {
    path: '', component: MessengerComponent, children: [
      { path: 'extra/:userId', component: MessengerExtraComponent },
      { path: 'history/:userId', component: MessengerHistoryComponent },
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    MessengerComponent,
    MessengerExtraComponent,
    MessengerUserListComponent,
    MessengerHistoryComponent
  ],
  providers: [
    ApiManagerService
  ]
})
export class MessengerModule { }
