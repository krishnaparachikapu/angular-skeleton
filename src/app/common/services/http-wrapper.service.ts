import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SESSION_URL_CONST } from '../../common/urls.constant';
import { environment } from '../../../environments/environment';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Injectable()
export class HttpWrapperService {
  constructor(private _http: HttpClient,
    private _router: ActivatedRoute) {
  }

  public get(URL: any, options?: any): Observable<any> {
    return this._http.get(this.getUrl(URL), { params: this.appendDefaultParams(options), headers: this.getHeaders() })
      .pipe(map((response: Response) => response));
  }

  public post(URL: any, body: any, options?: any): Observable<any> {
    return this._http.post(this.getUrl(URL), body, { params: options, headers: this.getPostHeaders() })
      .pipe(map((response: Response) => response));
  }

  public head(URL: any, options?: HttpParams): Observable<any> {
    return this._http.head(this.getUrl(URL), { params: options })
      .pipe(map((response: Response) => response));
  }

  public delete(URL: any, options?: HttpParams): Observable<any> {
    return this._http.delete(this.getUrl(URL), { params: options })
      .pipe(map((response: Response) => response));
  }

  public put(URL: any, body: any, options?: HttpParams): Observable<any> {
    return this._http.put(this.getUrl(URL), body, { params: options, headers: {} })
      .pipe(map((response: Response) => response));
  }
  public patch(URL: any, body: any, options?: HttpParams): Observable<any> {
    return this._http.patch(this.getUrl(URL), body, { params: options, headers: {} })
      .pipe(map((response: Response) => response));
  }

  public getUrl(URL: any) {
    let prefix = environment.proxy_path_prefix;
    let path = '';
    if (URL && !URL.path) {
      path = URL;
    } else {
      path = URL.path;
    }
    if (URL && URL.proxy === false) {
      prefix = environment.path_prefix;
    }
    if (URL.path_suffix) {
      return [prefix, path, URL.path_suffix].join('/');
    } else {
      return [prefix, path].join('/');
    }
  }

  public appendDefaultParams(options?: any) {
    options = options ? options : {};
    const paramLangCode = this._router.snapshot.paramMap.get('locale');
    options[SESSION_URL_CONST.LOCALE_PARAM] = paramLangCode;
    return options;
  }

  public getHeaders() {
    return { 'x-api-key': environment.HEADER_X_API_KEY };
  }
  public getPostHeaders() {
    return {
      'Content-Type': 'application/json',
      'x-api-key': environment.HEADER_X_API_KEY
    };
  }
}
