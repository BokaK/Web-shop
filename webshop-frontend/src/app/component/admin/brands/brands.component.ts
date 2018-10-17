import {Component, OnInit} from '@angular/core';
import {BrandService} from '../../../service/brand.service';
import {Brand} from '../../../model/brand';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

// TODO do not insert if form is not valid
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class AdminBrandsComponent implements OnInit {

  brandForm: FormGroup;
  submited = false;
  brands: Brand[];
  cols: any[];
  ifNewBrand = true;
  displayDialog = false;
  deleteBrandId: string;

  constructor(private brandService: BrandService,
              private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {

    this.brandForm = this.formBuilder.group({
      'id' : '',
      'brandName' : ['', Validators.required]
    });

    this.cols = [
      { field: 'brandName', header: 'Име на компанија' }
      ];

    this.getAllBrands();
  }

  getAllBrands() {
    this.brandService.getAllBrands().subscribe(data => {
      this.brands = data;
    });
  }
  saveBrand() {
    this.submited = true;
    if (this.ifNewBrand) {
      this.brandService.saveBrand(this.brandForm.value).subscribe(data => {
        this.reset();
      });
    } else {
      this.brandService.updateBrand(this.brandForm.value).subscribe(data => {
        this.reset();
      });
    }
  }

  newBrand() {
    this.ifNewBrand = true;
    this.reset();
  }

  changeBrand(value) {
    this.ifNewBrand = false;
    this.brandForm.setValue(value);
  }

  showDialog(value) {
    this.displayDialog = true;
    this.deleteBrandId = value.id;
  }
  deleteBrand() {
    this.brandService.deleteBrand(this.deleteBrandId).subscribe(data => {
      this.reset();
    });
  }

  reset() {
    this.submited = false;
    this.brandForm.reset();
    this.ifNewBrand = true;
    this.getAllBrands();
  }
}
