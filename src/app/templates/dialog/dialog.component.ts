import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Input()edit;
  @Input()struct;
  @Output() close = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeDialog(): void {
    this.close.emit();
  }

}
