import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class UserPartsComponent implements OnInit {

  rangeValues: number[] = [20,80];

  ngOnInit(): void {
  }

}
