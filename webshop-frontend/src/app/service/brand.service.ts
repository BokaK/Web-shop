import {Injectable} from '@angular/core';
import {DefaultService} from './default.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Brand} from '../model/brand';
import {catchError} from 'rxjs/operators';

@Injectable()
export class BrandService extends DefaultService {

  constructor(private http: HttpClient) {
    super();
  }

  getAllBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.adminUrl + '/brand/getAll').pipe(catchError(this.handleError));
  }

  saveBrand(brand: Brand) {
    return this.http.post<any>(this.adminUrl + '/brand/save', brand).pipe(catchError(this.handleError));
  }

  updateBrand(brand: Brand) {
    return this.http.post<any>(this.adminUrl + '/brand/update', brand).pipe(catchError(this.handleError));
  }

  deleteBrand(brand: Brand) {
    return this.http.post<any>(this.adminUrl + '/brand/delete', brand).pipe(catchError(this.handleError));
  }
}
