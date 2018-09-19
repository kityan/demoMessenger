import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router, ActivationEnd, Event, ActivatedRoute } from '@angular/router'
import { UserInfo } from '../../../models/UserInfo'
import { ApiManagerService } from '../../../services/api-manager.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-messenger-extra',
  templateUrl: './messenger-extra.component.html',
  styleUrls: ['./messenger-extra.component.css'],

})
export class MessengerExtraComponent implements OnInit, OnDestroy {
  private userId: string
  public userInfo: UserInfo
  private routerSubscription: Subscription

  constructor(
    private apiManagerService: ApiManagerService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.routerSubscription = this.router.events.subscribe(async (event: Event) => {
      if (event instanceof ActivationEnd) {
        if (event.snapshot && event.snapshot.params && event.snapshot.params.userId) {
          this.userId = event.snapshot.params.userId
          this.userInfo = await this.apiManagerService.getUserInfo(this.userId)
        }
      }
    })
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe()
  }

  ngOnInit() {

  }

  goToHistory() {
    this.router.navigate(['../../history', this.userId], { relativeTo: this.route })
  }

}
