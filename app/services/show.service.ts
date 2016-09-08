import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Show } from '../models/show';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShowService {
  constructor(private http: Http) {  }

  private myShowsUrl = 'app/my-shows.json';

  getShows(): Observable<Show[]> {
    return this.http.get(this.myShowsUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
