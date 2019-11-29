import { Component, OnInit } from '@angular/core';

import {ClientDctServService} from 'src/app/dictionary/clients-dict/services/client-dct-serv.service';
import {Client} from '../../core';
import {structs} from './struct/structs';

@Component({
  selector: 'app-clients-dict',
  templateUrl: './clients-dict.component.html',
  styleUrls: ['./clients-dict.component.css']
})
export class ClientsDictComponent implements OnInit {

  structs = structs;
  clients;
  editModal = false;
  removeModal = false;
  edit: Client = { client_id: 0, client_code: '', client_name: '' } as Client;
  constructor(
    private clientService: ClientDctServService
  ) { this.clients = clientService.getList(); }

  ngOnInit() {
  }

  // tslint:disable-next-line:no-unnecessary-initializer
  openDialog(elem: Client = { client_id: 0, client_code: '', client_name: '' }): void {
    console.log(elem);
    const client = this.clientService.get(elem.client_id);
    if (client !== undefined) {
      this.edit = this.clientService.get(elem.client_id);
    }
    console.log(this.edit);
    this.editModal = true;
  }
  closeDialog(): void {
    this.editModal = false;
    this.removeModal = false;
    this.edit = { client_id: 0, client_code: '', client_name: '' };
  }
  confirmCloseDialog(): void {
    this.removeModal = true;
  }

}
