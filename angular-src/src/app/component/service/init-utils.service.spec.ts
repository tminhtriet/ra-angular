/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InitUtilsService } from './init-utils.service';

describe('InitUtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InitUtilsService]
    });
  });

  it('should ...', inject([InitUtilsService], (service: InitUtilsService) => {
    expect(service).toBeTruthy();
  }));
});
