import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { MessengerHistoryComponent } from './messenger-history.component'
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClientModule } from '@angular/common/http'

describe('MessengerHistoryComponent', () => {
  let component: MessengerHistoryComponent
  let fixture: ComponentFixture<MessengerHistoryComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessengerHistoryComponent],
      imports: [RouterTestingModule, HttpClientModule]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengerHistoryComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
