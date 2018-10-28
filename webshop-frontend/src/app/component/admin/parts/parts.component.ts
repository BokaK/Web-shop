import {Component, OnInit} from '@angular/core';
import {PartService} from '../../../service/part.service';
import {Part} from '../../../model/part';
import {SelectItem} from 'primeng/api';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {errorMessages} from '../../../helpers/error-messages';
import {BrandService} from '../../../service/brand.service';
import {Brand} from '../../../model/brand';
import {forEach} from '@angular/router/src/utils/collection';
import {PartImageService} from '../../../service/part-image.service';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class AdminPartsComponent implements OnInit {

  cols: any[];
  parts: Part[];
  sortField: string;
  sortOrder: number;
  partForm: FormGroup;
  submited = false;
  ifNewPart = true;
  displayDialog = false;
  deletePartId: string;
  displayNewPartDialog = false;
  brands: Brand[];
  brandsDropDownOptions: SelectItem[];
  partImage: File;
  formData: FormData;
  partImagePath = 'http://localhost:7070/admin/partImage/part';
  constructor(private partService: PartService,
              private formBuilder: FormBuilder,
              private brandService: BrandService,
              private partImageService: PartImageService) {
  }

  ngOnInit(): void {

    this.cols = [
      { field: 'name', header: 'Артикал' },
      { field: 'description', header: 'Опис' },
      { field: 'price', header: 'Цена' },
      { field: 'onSale', header: 'Дали е на попуст?' },
      { field: 'priceOnSale', header: 'Цена со попуст' },
      { field: 'onStock', header: 'Дали има на залиха?' },
      { field: 'stockNumber', header: 'Број на залиха' },
      { field: 'brand.brandName', header: 'Компанија' }
    ];

    this.partService.getAllParts().subscribe(data => {
      this.parts = data;
    });

    this.partForm = this.formBuilder.group({
      'id': '',
      'name': ['', Validators.required],
      'description': ['', Validators.required],
      'price': ['', Validators.required],
      'stockNumber': [{value: '', disabled: 'true'}],
      'brand': ['', Validators.required],
      'onSale': [''],
      'onStock': [''],
      'priceOnSale': [{value: '', disabled: 'true'}]
    });

    this.getAllParts();
    this.getAllBrands();
  }

  getAllBrands() {
    this.brandService.getAllBrands().subscribe(data => {
      this.brands = data;
      this.exportBrandsToSelectItem(this.brands);
    });
  }

  exportBrandsToSelectItem(brands: Brand[]) {
    this.brandsDropDownOptions = [];

    let selectItem;
    for (let i = 0; i < this.brands.length; i++) {
      selectItem = {
        'label' : brands[i].brandName,
        'value' : brands[i]
      };
      this.brandsDropDownOptions.push(selectItem);
    }
  }

  onSortChange(event) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  getAllParts() {
    this.partService.getAllParts().subscribe(data => {
      this.parts = data;
    });
  }

  savePart() {
    this.submited = true;
    console.log(this.partImage);
    if (!this.partForm.valid) {
      return;
    }
    this.displayNewPartDialog = false;

    if(this.partImage != undefined) {
      this.formData = new FormData();
      this.formData.append("file", this.partImage);
    }
    if (this.ifNewPart) {
      this.partService.savePart(this.partForm.value).subscribe(data => {
        this.formData.append("part", data.id);
        this.saveImage();
        this.reset();
      });
    } else {
      this.partService.updatePart(this.partForm.value).subscribe(data => {
        this.formData.append("part", data.id);
        this.saveImage();
        this.reset();
      });
    }
  }

  saveImage() {
    this.partImageService.savePartImage(this.formData).subscribe(data => {
      this.getAllParts();
    });
  }

  newPart() {
    this.displayNewPartDialog = true;
    this.ifNewPart = true;
    this.reset();
  }

  changePart(value) {
    this.displayNewPartDialog = true;
    this.ifNewPart = false;
    this.partForm.setValue(value);
  }

  showDeleteDialog(value) {
    this.displayDialog = true;
    this.deletePartId = value.id;
  }

  deletePart() {
    this.partService.deletePart(this.deletePartId).subscribe(data => {
      this.reset();
    });
  }

  reset() {
    this.submited = false;
    this.partForm.reset();
    this.ifNewPart = true;
    this.getAllParts();
    this.formData = new FormData();
  }

  getErrorMessage(field: FormControl) {
    if (field.errors.required) {
      return errorMessages.required;
    } else if (field.errors.pattern) {
      return errorMessages.pattern;
    }
  }

  disableControl(control: FormControl, value) {
    if (value) {
      control.enable();
    } else {
      control.disable();
    }
  }

  handleFileInput(value) {
    this.partImage = value[0];
  }

}
