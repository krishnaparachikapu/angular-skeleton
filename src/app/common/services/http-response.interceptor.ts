import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '../../../../node_modules/@angular/router';

@Injectable()
export class HttpResponseInterceptor implements HttpInterceptor {
  static reqCounter = 0;
  actualReq: HttpRequest<any>;
  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    HttpResponseInterceptor.reqCounter++;
    this.actualReq = req.clone();
    return next.handle(this.actualReq).pipe(tap(
      succ => {
      },
      error => {
        // Loggers can be written to log exact error
        this.handleError(error, this.actualReq, next);
     })) as any;
  }

  private handleError(error: any, req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if (error instanceof HttpErrorResponse) {
      // Handle Errors
    }

    return throwError(error || 'Getting Error From Server');
  }
}
