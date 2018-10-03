import { Injectable } from '@angular/core';

//import { Observable } from 'rxjs';
import { Response } from '@angular/http';

// import 'rxjs/add/observable/throw';
import { throwError } from 'rxjs';
//import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProcessHTTPMsgService {

  constructor() { }

  public extractData(res: Response) {
    let body = res.json();
  
    return body || { }; // return body or if body == null, return empty object.
  }

  public handleError(error: Response | any) {
    let errMsg: string;

    if (error.error instanceof ErrorEvent) {
      // if server side has error
      /*
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      */
      errMsg = error.error.message;

    } else {
      //errMsg = error.message ? error.message : error.toString();
      errMsg = `${error.status} - ${error.statusText || ''} ${error.error}`;
    }

    return throwError(errMsg);
  }
}
