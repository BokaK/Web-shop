import {HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

export class DefaultService {

  constructor() {}

  apiUrl = 'http://localhost:7070';
  adminUrl = 'http://localhost:7070/admin';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    options: {withCredentials: true}
  };

  static parseServerError(error: any): ServerError {
    let serverError: ServerError;
    try {
      serverError = JSON.parse(error._body);
    } catch (e) {
      // ignore
    }
    return serverError;
  }
  public handleError(error: HttpErrorResponse) {
    const serverError: ServerError = DefaultService.parseServerError(error);
    let errMsg: string;
    if (serverError) {
      errMsg = serverError.message ? `${serverError.message} - ${serverError.exception}` :
        serverError.status ? `${serverError.status} - ${serverError.error}` : 'Server error';
    } else {
      errMsg = error.error.text ? error.error.text : (error.error.message ? error.error.message : error.error);
    }
    return throwError(errMsg);
  }

}

interface ServerError {
  error: string;
  exception: string;
  message: string;
  path: string;
  status: string;
  timestamp: string;
}
