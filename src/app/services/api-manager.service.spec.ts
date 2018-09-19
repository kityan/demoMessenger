import { TestBed, inject } from '@angular/core/testing'

import { ApiManagerService } from './api-manager.service'
import { HttpClientModule } from '@angular/common/http'

describe('ApiManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ApiManagerService]
    })
  })

  it('should be created', inject([ApiManagerService], (service: ApiManagerService) => {
    expect(service).toBeTruthy()
  }))
})
