import { Injectable } from '@angular/core';

import {Typeproj} from 'src/app/core/models/typeprojs';
@Injectable({
  providedIn: 'root'
})
export class TypeprojDictServService {
  private typeprojList: Typeproj[] = [ { id: 1, code: 'm', name: 'Мобильная разработка' },
                                   { id: 2, code: 'w', name: 'Web разработка' }
                                   ];
  constructor() { }

  public get(id: number) {
    return this.typeprojList.find(x => x.id === id);
  }

  getList() {
    return this.typeprojList;
  }
}
