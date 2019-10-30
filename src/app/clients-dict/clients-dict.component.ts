import { Component, OnInit } from '@angular/core';

import {ClientDctServService} from 'src/app/clients-dict/services/client-dct-serv.service';
import {Client} from '../core';
@Component({
  selector: 'app-clients-dict',
  templateUrl: './clients-dict.component.html',
  styleUrls: ['./clients-dict.component.css']
})
export class ClientsDictComponent implements OnInit {
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
    var client = this.clientService.get(clientId);
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
