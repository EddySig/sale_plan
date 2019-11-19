import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientsDictComponent } from './dictionary/clients-dict/clients-dict.component';
import { TypeprojDictComponent } from './dictionary/typeproj-dict/typeproj-dict.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AutorizationComponent } from './autorization/autorization.component';
import { RoleDictComponent } from './dictionary/role-dict/role-dict.component';
import { ProjectDictComponent } from './dictionary/project-dict/project-dict.component';
import { SpecDictComponent } from './dictionary/spec-dict/spec-dict.component';
import { SettingsDictComponent } from './dictionary/settings-dict/settings-dict.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ClientsDictComponent,
    TypeprojDictComponent,
    AutorizationComponent,
    RoleDictComponent,
    ProjectDictComponent,
    SpecDictComponent,
    SettingsDictComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
