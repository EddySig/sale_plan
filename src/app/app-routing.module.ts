import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ClientsDictComponent } from './dictionary/clients-dict/clients-dict.component';
import { TypeprojDictComponent } from './dictionary/typeproj-dict/typeproj-dict.component';
import {RoleDictComponent} from './dictionary/role-dict/role-dict.component';
import {ProjectDictComponent} from './dictionary/project-dict/project-dict.component';
import {SpecDictComponent} from './dictionary/spec-dict/spec-dict.component';
import {SettingsDictComponent} from './dictionary/settings-dict/settings-dict.component';
const routes: Routes = [
  { path: 'client', component: ClientsDictComponent },
  { path: 'typeproj', component: TypeprojDictComponent },
  { path: 'roles', component: RoleDictComponent },
  { path: 'projects', component: ProjectDictComponent },
  { path: 'spec', component: SpecDictComponent },
  { path: 'settings', component: SettingsDictComponent }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
