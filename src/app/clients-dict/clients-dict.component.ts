import { Component, OnInit } from '@angular/core';

import {clients} from 'src/app/clients-dict/clients';
@Component({
  selector: 'app-clients-dict',
  templateUrl: './clients-dict.component.html',
  styleUrls: ['./clients-dict.component.css']
})
export class ClientsDictComponent implements OnInit {
  client = clients;
  constructor() { }

  ngOnInit() {
  }

}
