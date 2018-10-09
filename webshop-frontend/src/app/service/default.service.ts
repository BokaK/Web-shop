import {HttpHeaders} from '@angular/common/http';

export class DefaultService {

  constructor() {}

  apiUrl = 'http://localhost:7070';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
}
