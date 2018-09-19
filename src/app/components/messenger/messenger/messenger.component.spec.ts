import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { MessengerComponent } from './messenger.component'
import { RouterTestingModule } from '@angular/router/testing'
import { MessengerUserListComponent } from '../messenger-user-list/messenger-user-list.component'
import { HttpClientModule } from '@angular/common/http'

describe('MessengerComponent', () => {
  let component: MessengerComponent
  let fixture: ComponentFixture<MessengerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessengerComponent, MessengerUserListComponent],
      imports: [RouterTestingModule, HttpClientModule]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
