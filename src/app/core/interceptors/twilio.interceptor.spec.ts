import { TestBed } from '@angular/core/testing';

import { TwilioInterceptor } from './twilio.interceptor';

describe('TwilioInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TwilioInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TwilioInterceptor = TestBed.inject(TwilioInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
