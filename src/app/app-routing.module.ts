import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ClientsDictComponent } from './clients-dict/clients-dict.component';
const routes: Routes = [
  { path: 'client', component: ClientsDictComponent }
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
