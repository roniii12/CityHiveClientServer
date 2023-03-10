import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class TwilioInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // if(request.url.indexOf("https://api.twilio.com") >= -1) {
    //   const token = this.createBasicAuth();
    //   request = request.clone({headers: request.headers.set('Authorization', token)});
    // }
    return next.handle(request);
  }
}
