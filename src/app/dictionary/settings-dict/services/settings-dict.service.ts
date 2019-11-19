import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsDictService {
  private settingList = [
    {
      resourceplanmain_id: 1,
      resourceplanmain_cload: 2,
      resourceplanmain_labor: 3,
      resourceplanmain_hourcost: 444,
      period_beg: '19.11.2019',
      period_end: '19.11.2019'
    },
    {
      resourceplanmain_id: 2,
      resourceplanmain_cload: 2,
      resourceplanmain_labor: 3,
      resourceplanmain_hourcost: 444,
      period_beg: '19.11.2019',
      period_end: '19.11.2019'
    }
  ]
  constructor() { }

  getList() {
    return this.settingList;
  }
  public get(id: number) {
    return this.settingList.find(x => x.resourceplanmain_id === id);
  }

}
