import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { MessengerExtraComponent } from './messenger-extra.component'
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClientModule } from '@angular/common/http'

describe('MessengerExtraComponent', () => {
  let component: MessengerExtraComponent
  let fixture: ComponentFixture<MessengerExtraComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MessengerExtraComponent],
      imports: [RouterTestingModule, HttpClientModule]

    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengerExtraComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
