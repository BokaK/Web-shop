import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html'
})
export class PartComponent implements OnInit {
  ngOnInit(): void {
    console.log('part');
  }
}
