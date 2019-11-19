import { Component, OnInit } from '@angular/core';

import {Settings} from '../../core/models/settings';
import {SettingsDictService} from './services/settings-dict.service';

@Component({
  selector: 'app-settings-dict',
  templateUrl: './settings-dict.component.html',
  styleUrls: ['./settings-dict.component.css']
})
export class SettingsDictComponent implements OnInit {
  private settings;
  editModal = false;
  removeModal = false;
  edit: Settings = {
    resourceplanmain_id: 0,
    resourceplanmain_cload: 0,
    resourceplanmain_labor: 0,
    resourceplanmain_hourcost: 0,
    period_beg: '19.11.2019',
    period_end: '19.11.2019'
  } as Settings;
  constructor(private settServ: SettingsDictService) {
    this.settings = settServ.getList();
  }

  ngOnInit() {
  }
  openDialog(settId = 0): void {
    const client = this.settServ.get(settId);
    if (client !== undefined) {
      this.edit = this.settServ.get(settId);
    }
    this.editModal = true;
  }
  closeDialog(): void {
    this.editModal = false;
    this.removeModal = false;
    this.edit = {
      resourceplanmain_id: 0,
      resourceplanmain_cload: 0,
      resourceplanmain_labor: 0,
      resourceplanmain_hourcost: 0,
      period_beg: '19.11.2019',
      period_end: '19.11.2019'
    };
  }

  confirmCloseDialog(): void {
    this.removeModal = true;
  }
}
