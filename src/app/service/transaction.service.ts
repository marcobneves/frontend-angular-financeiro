import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ITransacao } from '../interface/transation';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import config  from '../../api/config';

@Injectable()
export class TransactionService {

  private _url: string = config.url;

  constructor(private http: HttpClient) { }

  getTransaction(): Observable<ITransacao> {
    return this.http.get<ITransacao>(this._url)
      .pipe(catchError(this.errorHandle));
  }

  errorHandle(error: HttpErrorResponse) {
    return throwError(error.error || "Problema com o servidor")
  }
}
