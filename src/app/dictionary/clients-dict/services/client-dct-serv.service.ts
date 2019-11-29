import { Injectable } from '@angular/core';

import {Client} from 'src/app/core/models/clients';
@Injectable({
  providedIn: 'root'
})
export class ClientDctServService {
  private clientList: Client[] = [ { client_id: 1, client_code: 'aks', client_name: 'АКС' },
    { client_id: 2, client_code: 'ertel', client_name: 'Эр-телеком' },
    { client_id: 3, client_code: 'vost', client_name: 'Vostok' },
    { client_id: 4, client_code: 'tek', client_name: 'ТЭК' },
    { client_id: 5, client_code: 'rks', client_name: 'РКС' }
  ];
  constructor() { }

  public get(id: number) {
    return this.clientList.find(x => x.client_id === id);
  }

  getList() {
    return this.clientList;
  }
}
