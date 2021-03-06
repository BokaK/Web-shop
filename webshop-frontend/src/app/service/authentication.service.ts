import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DefaultService} from './default.service';
import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class AuthenticationService extends DefaultService {

  constructor(private http: HttpClient) {
    super();
  }

  attemptAuth(ussername: string, password: string): Observable<any> {
    console.log('attempAuth ::');
    const body = new HttpParams()
      .set('username', ussername)
      .set('password', password);

    return this.http.post(this.apiUrl + '/login',
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('Accept', 'text/html')
      }).pipe(catchError(this.handleError));
  }



}
