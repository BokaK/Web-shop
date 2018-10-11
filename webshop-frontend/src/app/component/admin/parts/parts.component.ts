import {Component, OnInit} from '@angular/core';
import {PartService} from '../../../service/part.service';
import {Part} from '../../../model/part';
import {SelectItem} from 'primeng/api';

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

  constructor(private partService: PartService) {
  }

  ngOnInit(): void {
    this.partService.getAllParts().subscribe(data => {
      this.parts = data;
      console.log(data);
    });

    this.sortOptions = [
      {label: 'Опис', value: 'description'},
      {label: 'Цена', value: 'price'},
      {label: 'Компанија', value: 'brand.brandName'}
    ];
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
}
