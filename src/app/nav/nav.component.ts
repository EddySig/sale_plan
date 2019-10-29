import { Component} from '@angular/core';

import { dictionary } from 'src/app/nav/navigation/dictionary';
import { plans } from 'src/app/nav/navigation/plans';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent  {
  dictionary = dictionary;
  plans = plans;
  constructor(){}
}
