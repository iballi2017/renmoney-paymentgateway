import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { testUrl } from 'src/config/api';
import { catchError, map, tap, retry } from 'rxjs/operators';
import { handleError } from 'src/config/errorResponse';/* Importing errorResponse Handler */
import { countriesUrl } from 'src/config/api';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
_url = testUrl;
paymentDataSent = false;
hasSendingDataError = false;
serverErrorMsg = "";
  constructor(private _http: HttpClient) { }

  getRequest(data:any){
    return this._http.get(this._url)
    .pipe(
      retry(3),
      catchError(handleError)
    );
  }

  getCountries(){
    console.log("Hello")
    return this._http.get(countriesUrl).pipe(
      retry(3),
      catchError(handleError)
    )
  }

}
