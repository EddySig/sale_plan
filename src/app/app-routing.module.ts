import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ClientsDictComponent } from './clients-dict/clients-dict.component';
import { TypeprojDictComponent } from './typeproj-dict/typeproj-dict.component';
const routes: Routes = [
  { path: 'client', component: ClientsDictComponent },
  { path: 'typeproj', component: TypeprojDictComponent }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
