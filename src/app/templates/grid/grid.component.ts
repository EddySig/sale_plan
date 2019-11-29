import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input()structs;
  @Input()rows;
  @Output() childEvent = new EventEmitter<number>();
  private id;
  constructor() { }

  ngOnInit() {
  }
  getIDrows() {
    return 0;
  }
  itsID(str: string) {
    let isID = false;
    if (str.search('/*_id') === -1) {
      isID = true;
    }
    return isID;
  }

  open(id = 0) {
    console.log(id);
    this.childEvent.emit(id);
  }
}
