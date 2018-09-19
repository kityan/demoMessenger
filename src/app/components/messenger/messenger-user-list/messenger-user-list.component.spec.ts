import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { MessengerUserListComponent } from './messenger-user-list.component'
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClientModule } from '@angular/common/http'

describe('MessengerUserListComponent', () => {
  let component: MessengerUserListComponent
  let fixture: ComponentFixture<MessengerUserListComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessengerUserListComponent],
      imports: [RouterTestingModule, HttpClientModule]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengerUserListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
