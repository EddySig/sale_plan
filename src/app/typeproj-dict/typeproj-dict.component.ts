import { Component, OnInit } from '@angular/core';

import {Typeproj} from '../core';
import {TypeprojDictServService} from './services/typeproj-dict-serv.service';

@Component({
  selector: 'app-typeproj-dict',
  templateUrl: './typeproj-dict.component.html',
  styleUrls: ['./typeproj-dict.component.css']
})
export class TypeprojDictComponent implements OnInit {
  typeprojs;
  edit: Typeproj = { id: 0, code: '', name: '' } as Typeproj;
   editModal = false;
   removeModal = false;

  constructor(private typeprojserv: TypeprojDictServService) {
    this.typeprojs = this.typeprojserv.getList();
  }
  ngOnInit() {
  }
  openDialog(typeId = 0): void {
    var typeprojid = this.typeprojserv.get(typeId);
    if (typeprojid !== undefined) {
      this.edit = this.typeprojserv.get(typeId);
    }
    this.editModal = true;
  }
  closeDialog(): void {
    this.edit = { id: 0, code: '', name: '' };
    this.editModal = false;
    this.removeModal = false;
  }
  confirmCloseDialog(): void {
    this.removeModal = true;
  }



}
