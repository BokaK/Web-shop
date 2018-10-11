import {Injectable} from '@angular/core';
import {DefaultService} from './default.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Brand} from '../model/brand';

@Injectable()
export class BrandService extends DefaultService {

  constructor(private http: HttpClient) {
    super();
  }

  getAllBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(this.adminUrl + '/brand/getAll');
  }

  saveBrand(brand: Brand) {
    return this.http.post<any>(this.adminUrl + '/brand/save', brand);
  }

  updateBrand(brand: Brand) {
    return this.http.post<any>(this.adminUrl + '/brand/update', brand);
  }

  deleteBrand(id: string) {
    return this.http.get<any>(this.adminUrl + '/brand/delete/' + id);
  }
}
