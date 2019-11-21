import { Component, OnInit } from '@angular/core';
import {Roles} from '../../core/models/roles';
import {Specialists} from '../../core/models/specialists';
import {SpecDictService} from './services/spec-dict.service';

@Component({
  selector: 'app-spec-dict',
  templateUrl: './spec-dict.component.html',
  styleUrls: ['./spec-dict.component.css']
})
export class SpecDictComponent implements OnInit {
  private specialists;
  editModal = false;
  removeModal = false;
  edit: Specialists = {
    specialist_id: 0,
    specialtytype_name: '',
    specialist_part: 0,
    specialist_quantity: 0,
    projecttype_id: 0,
    projecttype_name: '',
    period: Date.now()
  } as Specialists;
  constructor(private specService: SpecDictService) {
    this.specialists = specService.getList();
  }

  ngOnInit() {
  }
  openDialog(roleId = 0): void {
    const client = this.specService.get(roleId);
    if (client !== undefined) {
      this.edit = this.specService.get(roleId);
    }
    this.editModal = true;
  }
  closeDialog(): void {
    this.editModal = false;
    this.removeModal = false;
    this.edit = {
      specialist_id: 0,
      specialtytype_id: 0,
      specialtytype_name: '',
      specialist_part: 0,
      specialist_quantity: 0,
      projecttype_id: 0,
      projecttype_name: '',
      period: Date.now()
    };
  }
  confirmCloseDialog(): void {
    this.removeModal = true;
  }
  getTypesList() {
    return this.specService.getTypes();
  }
  getSpecList() {
    return this.specService.getSpec();
  }
}
