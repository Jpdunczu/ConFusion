import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProcessHTTPMsgService {

  constructor() { }

  public extractData(res: Response) {
    let body = res.json();
  
    return body || { }; // return body or if body == null, return empty object.
  }
}