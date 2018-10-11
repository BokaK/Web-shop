import {HttpHeaders} from '@angular/common/http';

export class DefaultService {

  constructor() {}

  apiUrl = 'http://localhost:7070';
  adminUrl = 'http://localhost:7070/admin';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    options: {withCredentials: true}
  };
}
