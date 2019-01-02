import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { HttpCacheService } from './http-cache.service';
import { tap, filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { CACHE_API_LIST } from '../../common/common.constants';

@Injectable()
export class HttpCacheInterceptor implements HttpInterceptor {

  constructor(private _cacheService: HttpCacheService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if (req.method !== 'GET' || this._filterServices(req)) {
      return next.handle(req);
    }

    const cachedResponse = this._cacheService[req.urlWithParams] || null;
    if (cachedResponse) {
      return of(cachedResponse);
    }

    return (next.handle(req).pipe(tap(
      succ => {
        if (succ instanceof HttpResponse) {
          this._cacheService[req.urlWithParams] = succ;
        }
      }
    )));
  }

  private _filterServices(req: HttpRequest<any>) {
    for (const routeItem of CACHE_API_LIST) {
      if ((req.urlWithParams as any).indexOf(routeItem.path) !== -1) {
        return false;
      }
    }
    return true;
  }
}
