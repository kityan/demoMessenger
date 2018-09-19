import { Component, OnInit, OnDestroy } from '@angular/core'
import { Router, ActivationEnd, Event, ActivatedRoute } from '@angular/router'
import { ApiManagerService } from '../../../services/api-manager.service'
import { Subscription } from 'rxjs'
import { UserMessage } from '../../../models/Message'
import * as uuid from 'uuid/v4'

@Component({
  selector: 'app-messenger-history',
  templateUrl: './messenger-history.component.html',
  styleUrls: ['./messenger-history.component.css'],
})

export class MessengerHistoryComponent implements OnInit, OnDestroy {
  private userId: string
  public messages: UserMessage[] = []
  private routerSubscription: Subscription

  constructor(
    private apiManagerService: ApiManagerService,
    private router: Router
  ) {
    this.routerSubscription = this.router.events.subscribe(async (event: Event) => {
      if (event instanceof ActivationEnd) {
        if (event.snapshot && event.snapshot.params && event.snapshot.params.userId) {
          this.userId = event.snapshot.params.userId
          this.messages = await this.apiManagerService.getUserMessages(this.userId)
        }
      }
    })
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe()
  }

  ngOnInit() {

  }

  send(textarea: HTMLTextAreaElement) {
    if (!textarea.value) { return }
    const msg: UserMessage = {
      id: uuid(),
      text: textarea.value,
      dt: new Date(),
      isFrom: false
    }
    this.apiManagerService.saveMessage(msg, this.userId)
    this.messages.push(msg)
    textarea.value = ''
  }

  keyup(event: KeyboardEvent) {
    if (event.keyCode === 13) {
      this.send(<HTMLTextAreaElement>event.currentTarget)
    }
  }

}
