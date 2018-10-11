import {Injectable} from '@angular/core';
import {DefaultService} from './default.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Part} from '../model/part';

@Injectable()
export class PartService extends DefaultService {

  constructor(private http: HttpClient) {
    super();
  }

  getAllParts(): Observable<Part[]> {
    return this.http.get<Part[]>(this.apiUrl + '/part/getAll');
  }
}
