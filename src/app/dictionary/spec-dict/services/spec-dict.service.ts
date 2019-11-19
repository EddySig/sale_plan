import { Injectable } from '@angular/core';
import {Specialists} from '../../../core/models/specialists';
import {TypeprojDictServService} from '../../typeproj-dict/services/typeproj-dict-serv.service';
import {RoleDictService} from '../../role-dict/services/role-dict.service';

@Injectable({
  providedIn: 'root'
})
export class SpecDictService {
  private specList: Specialists[] = [
    {
      specialist_id: 1,
      specialtytype_id: 3,
      specialtytype_name: 'Аналитик',
      specialist_part: 0.35,
      specialist_quantity: 7.5,
      projecttype_id: 1,
      projecttype_name: 'Desktop',
      period: Date.now()
    },
    {
      specialist_id: 2,
      specialtytype_id: 3,
      specialtytype_name: 'Программист',
      specialist_part: 0.45,
      specialist_quantity: 6.0,
      projecttype_id: 2,
      projecttype_name: 'Web разработка',
      period: Date.now()
    },
    {
      specialist_id: 3,
      specialtytype_id: 3,
      specialtytype_name: 'Руководитель проекта',
      specialist_part: 0.11,
      specialist_quantity: 4.0,
      projecttype_id: 3,
      projecttype_name: 'Мобильная разработка',
      period: Date.now()
    }
  ]
  constructor(private typeServ: TypeprojDictServService,
              private roleServ: RoleDictService) { }
  public get(id: number) {
    return this.specList.find(x => x.specialist_id === id);
  }

  getList() {
    return this.specList;
  }

  getTypes() {
    return this.typeServ.getList();
  }

  getSpec() {
    return this.roleServ.getList();
  }
}
