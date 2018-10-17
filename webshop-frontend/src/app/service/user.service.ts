import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DefaultService} from './default.service';
import {catchError} from 'rxjs/operators';
import {User} from '../model/user';

@Injectable()
export class UserService extends DefaultService {

  constructor(private http: HttpClient) {
    super();
  }

  getAuthenticatedUser(): Observable<any> {

    return this.http.get(this.adminUrl + '/user/', this.httpOptions).pipe(catchError(this.handleError));
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.adminUrl + '/user/getAll').pipe(catchError(this.handleError));
  }

  saveUser(user: User) {
    return this.http.post<any>(this.adminUrl + '/user/save', user).pipe(catchError(this.handleError));
  }

  updateUser(user: User) {
    return this.http.post<any>(this.adminUrl + '/user/update', user).pipe(catchError(this.handleError));
  }

  deleteUser(id: string) {
    return this.http.get<any>(this.adminUrl + '/user/delete/' + id).pipe(catchError(this.handleError));
  }

}
