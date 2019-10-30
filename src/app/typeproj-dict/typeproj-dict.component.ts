import { Component, OnInit } from '@angular/core';

import {typeprojs} from 'src/app/core/models/typeprojs';
@Component({
  selector: 'app-typeproj-dict',
  templateUrl: './typeproj-dict.component.html',
  styleUrls: ['./typeproj-dict.component.css']
})
export class TypeprojDictComponent implements OnInit {
  typeprojs = typeprojs;
  constructor() { }

  ngOnInit() {
  }

}
