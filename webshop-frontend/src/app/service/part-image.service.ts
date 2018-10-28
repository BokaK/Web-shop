import {Injectable} from '@angular/core';
import {DefaultService} from './default.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Part} from '../model/part';
import {catchError} from 'rxjs/operators';

@Injectable()
export class PartImageService extends DefaultService {

  constructor(private http: HttpClient) {
    super();
  }

  savePartImage(value: any) {
    return this.http.post<any>(this.adminUrl + '/partImage/', value).pipe(catchError(this.handleError));
  }

  getImage(id: string) {
    return this.http.get<any>(this.adminUrl + '/partImage/part/' + id).pipe(catchError(this.handleError));
  }
}
