import { Injectable } from '@angular/core';

import { Feedback } from '../shared/feedback';

import { Observable } from 'rxjs';
import { Restangular } from 'ngx-restangular';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private restangular: Restangular) { }

  submitFeedback(feedback: Feedback): Observable<Feedback> {
    return this.restangular.one('feedback', feedback).post('feedback', feedback);
  }
}
