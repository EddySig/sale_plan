import { Injectable } from '@angular/core';

import {Client} from 'src/app/core/models/clients';
@Injectable({
  providedIn: 'root'
})
export class ClientDctServService {
  private clientList: Client[] = [ { id: 1, code: 'rks', name: 'РКС' },
    { id: 2, code: 'ertel', name: 'Эр-телеком' },
    { id: 3, code: 'vost', name: 'Vostok' },
    { id: 4, code: 'tek', name: 'ТЭК' },
    { id: 5, code: 'rks', name: 'РКС' }
  ];
  constructor() { }

  public get(id: number) {
    return this.clientList.find(x => x.id === id);
  }

  getList() {
    return this.clientList;
  }
}
