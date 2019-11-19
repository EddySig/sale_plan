import { Component, OnInit } from '@angular/core';
import {Projects} from '../../core/models/projects';
import {ProjectDictService} from './services/project-dict.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-project-dict',
  templateUrl: './project-dict.component.html',
  styleUrls: ['./project-dict.component.css']
})
export class ProjectDictComponent implements OnInit {
  private projects;
  editModal = false;
  removeModal = false;
  selectedCountriesControl = new FormControl();
  edit: Projects = { project_id: 0,
                     project_name: '',
                     client_name: '',
                     projecttype_code: '',
                     project_realizprob: 0,
                     project_laborcoef: 0
                   } as Projects;
  constructor(private projService: ProjectDictService) {
    this.projects = projService.getList();
  }

  ngOnInit() {
  }

  getClientList(){
    return this.projService.getClients();
  }
  getTypesList(){
    return this.projService.getTypes();
  }
  openDialog(projId = 0): void {
    const client = this.projService.get(projId);
    if (client !== undefined) {
      this.edit = this.projService.get(projId);
    }
    this.editModal = true;
  }
  closeDialog(): void {
    this.editModal = false;
    this.removeModal = false;
    this.edit = { project_id: 0,
      project_name: '',
      client_id: 0,
      client_name: '',
      projecttype_id: 0,
      projecttype_code: '',
      project_realizprob: 0,
      project_laborcoef: 0
    };
  }

  checkSelect(one: any, two: any) {
    console.log(one , two);
    return (one === two) ? true : false;
  }

  confirmCloseDialog(): void {
    this.removeModal = true;
  }
}
