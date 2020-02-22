import { TestBed } from '@angular/core/testing';

import { FormControlValidationMsgService } from './form-control-validation-msg.service';

describe('FormControlValidationMsgService', () => {
  let service: FormControlValidationMsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormControlValidationMsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
