import { Component, OnInit } from '@angular/core';

import {Roles} from '../../core/models/roles';
import {RoleDictService} from './services/role-dict.service';


@Component({
  selector: 'app-role-dict',
  templateUrl: './role-dict.component.html',
  styleUrls: ['./role-dict.component.css']
})
export class RoleDictComponent implements OnInit {
  private roles;
  editModal = false;
  removeModal = false;
  edit: Roles = { id: 0, code: '', name: '' } as Roles;
  constructor(private roleService: RoleDictService) {
    this.roles = roleService.getList();
  }

  ngOnInit() {
  }
  openDialog(roleId = 0): void {
    const client = this.roleService.get(roleId);
    if (client !== undefined) {
      this.edit = this.roleService.get(roleId);
    }
    this.editModal = true;
  }
  closeDialog(): void {
    this.editModal = false;
    this.removeModal = false;
    this.edit = { id: 0, code: '', name: '' };
  }
  confirmCloseDialog(): void {
    this.removeModal = true;
  }
}
