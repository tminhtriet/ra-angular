/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AirlineUserService } from './airline-user.service';

describe('AirlineUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AirlineUserService]
    });
  });

  it('should ...', inject([AirlineUserService], (service: AirlineUserService) => {
    expect(service).toBeTruthy();
  }));
});
