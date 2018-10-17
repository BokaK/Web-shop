import {Component, OnInit} from '@angular/core';
import {PartService} from '../../../service/part.service';
import {Part} from '../../../model/part';
import {SelectItem} from 'primeng/api';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html'
})
export class AdminPartsComponent implements OnInit {

  parts: Part[];
  sortOptions: SelectItem[];
  sortKey: string;
  sortField: string;
  sortOrder: number;
  filterKey: string;
  partForm: FormGroup;
  submited = false;
  cols: any[];
  ifNewPart = true;
  displayDialog = false;
  deletePartId: string;

  constructor(private partService: PartService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.partService.getAllParts().subscribe(data => {
      this.parts = data;
      console.log(data);
    });

    this.sortOptions = [
      {label: 'Опис', value: 'description'},
      {label: 'Цена', value: 'price'},
      {label: 'Компанија', value: 'part.partName'}
    ];

    this.partForm = this.formBuilder.group({
      'id': '',
      'name': ['', Validators.required],
      'description': ['', Validators.required]
    });

    this.cols = [
      {field: 'partName', header: 'Име на компанија'}
    ];

    this.getAllParts();
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
    if (this.ifNewPart) {
      this.partService.savePart(this.partForm.value).subscribe(data => {
        this.reset();
      });
    } else {
      this.partService.updatePart(this.partForm.value).subscribe(data => {
        this.reset();
      });
    }
  }

  newPart() {
    this.ifNewPart = true;
    this.reset();
  }

  changePart(value) {
    this.ifNewPart = false;
    this.partForm.setValue(value);
  }

  showDialog(value) {
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
  }
}
