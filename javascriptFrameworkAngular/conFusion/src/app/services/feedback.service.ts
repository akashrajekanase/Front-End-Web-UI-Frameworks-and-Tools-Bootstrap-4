import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map, catchError } from 'rxjs/operators';

import { baseURL } from '../shared/baseurl';

import { Feedback } from '../shared/feedback';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  submitFeedback(feedback: Feedback): Observable<Feedback>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    // is feedback needed
    console.log(feedback)
    console.log(baseURL)
    return this.http.post<Feedback>(baseURL + 'feedback/', JSON.stringify(feedback), httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }
}
