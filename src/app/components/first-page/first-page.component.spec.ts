import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { FirstPageComponent } from './first-page.component'
import { RouterTestingModule } from '@angular/router/testing'

describe('FirstPageComponent', () => {
  let component: FirstPageComponent
  let fixture: ComponentFixture<FirstPageComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FirstPageComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
