import { Injectable } from '@angular/core';
import {Roles} from '../../../core/models/roles';

@Injectable({
  providedIn: 'root'
})
export class RoleDictService {
  private roleList: Roles[] = [ { id: 1, code: 'ОБУЧ', name: 'Специалист по обучению' },
    { id: 2, code: 'ТЕХ', name: 'Специалист техподдержки' },
    { id: 3, code: 'ДИЗАЙН', name: 'Дизайнер' },
    { id: 4, code: 'ВЕРСТ', name: 'Верстальщик' },
    { id: 5, code: 'ПРОГ', name: 'Программист' }
  ];
  constructor() { }

  public get(id: number) {
    return this.roleList.find(x => x.id === id);
  }

  getList() {
    return this.roleList;
  }
}
