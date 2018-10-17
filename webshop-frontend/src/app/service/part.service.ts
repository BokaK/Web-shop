import {Injectable} from '@angular/core';
import {DefaultService} from './default.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Part} from '../model/part';
import {catchError} from 'rxjs/operators';

@Injectable()
export class PartService extends DefaultService {

  constructor(private http: HttpClient) {
    super();
  }

  getAllParts(): Observable<Part[]> {
    return this.http.get<Part[]>(this.apiUrl + '/part/getAll').pipe(catchError(this.handleError));
  }
  savePart(part: Part) {
    return this.http.post<any>(this.adminUrl + '/part/save', part).pipe(catchError(this.handleError));
  }

  updatePart(part: Part) {
    return this.http.post<any>(this.adminUrl + '/part/update', part).pipe(catchError(this.handleError));
  }

  deletePart(id: string) {
    return this.http.get<any>(this.adminUrl + '/part/delete/' + id).pipe(catchError(this.handleError));
  }
}
