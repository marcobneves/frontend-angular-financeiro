import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ITransacao } from '../interface/transation';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable()
export class TransactionService {

  private _url: string = "assets/data/legado.json"

  constructor(private http: HttpClient) { }

  getTransaction(): Observable<ITransacao[]> {
    return this.http.get<ITransacao[]>(this._url)
      .pipe(catchError(this.errorHandle));
  }

  errorHandle(error: HttpErrorResponse) {
    return throwError(error.message || "Server error")
  }
}
