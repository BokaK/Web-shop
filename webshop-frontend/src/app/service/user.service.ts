import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {DefaultService} from './default.service';

@Injectable()
export class UserService extends DefaultService {

  constructor(private http: HttpClient) {
    super();
  }

  public getAuthenticatedUser(): Observable<any> {
    return this.http.get(this.apiUrl + '/user/', this.httpOptions);
  }

}
