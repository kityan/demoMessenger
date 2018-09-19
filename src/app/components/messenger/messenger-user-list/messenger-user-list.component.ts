import { Component, OnInit, OnDestroy } from '@angular/core'
import { ApiManagerService } from '../../../services/api-manager.service'
import { UserShortInfo } from '../../../models/UserShortInfo'
import { Subscription } from 'rxjs'
import { Router, Event, ActivationEnd } from '@angular/router'

@Component({
  selector: 'app-messenger-user-list',
  templateUrl: './messenger-user-list.component.html',
  styleUrls: ['./messenger-user-list.component.css']
})
export class MessengerUserListComponent implements OnInit, OnDestroy {
  public userList: UserShortInfo[] = []
  private routerSubscription: Subscription
  public currentUserId: string

  constructor(
    private apiManagerService: ApiManagerService,
    private router: Router
  ) {
    this.routerSubscription = this.router.events.subscribe((event: Event) => {
      if (event instanceof ActivationEnd) {
        if (event.snapshot && event.snapshot.params && event.snapshot.params.userId) {
          this.currentUserId = event.snapshot.params.userId
        }
      }
    })
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe()
  }

  async ngOnInit() {
    this.userList = await this.apiManagerService.getUsersList()
  }

}
