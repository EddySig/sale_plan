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
  edit: Client = { id: 0, code: '', name: '' } as Client;
  constructor(
    private clientService: ClientDctServService
  ) { this.clients = clientService.getList(); }

  ngOnInit() {
  }

  openDialog(clientId = 0): void {
    console.log(clientId);
    const client = this.clientService.get(clientId);
    if (client !== undefined) {
      this.edit = this.clientService.get(clientId);
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
