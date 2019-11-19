import { Injectable } from '@angular/core';

import {Projects} from '../../../core/models/projects';
import {ClientDctServService} from '../../clients-dict/services/client-dct-serv.service';
import {TypeprojDictServService} from '../../typeproj-dict/services/typeproj-dict-serv.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectDictService {
  private projectList: Projects[] = [
    { project_id: 1,
      project_name: 'ГС АИАС',
      client_id: 1,
      client_name: 'АКС',
      projecttype_id: 3,
      projecttype_code: 'd',
      project_realizprob: 1,
      project_laborcoef: 1
    },
    { project_id: 2,
      project_name: 'Сопровождение портала РГМУ 2019',
      client_id: 2,
      client_name: 'Сахалинский ОЦИ',
      projecttype_id: 4,
      projecttype_code: 's',
      project_realizprob: 1,
      project_laborcoef: 1
    },
    { project_id: 3,
      project_name: 'ГС ЛК ЕРИЦ ЯНАО 2020',
      client_id: 3,
      client_name: 'ЕРИЦ ЯНАО',
      projecttype_id: 5,
      projecttype_code: '1',
      project_realizprob: 1,
      project_laborcoef: 1
    },
    { project_id: 4,
      project_name: 'Разработка интернет-аптеки',
      client_id: 4,
      client_name: 'Артфарм',
      projecttype_id: 1,
      projecttype_code: 'm',
      project_realizprob: 1,
      project_laborcoef: 1
    },
    { project_id: 5,
      project_name: 'Тиражирование GU',
      client_id: 1,
      client_name: 'АКС',
      projecttype_id: 2,
      projecttype_code: 'w',
      project_realizprob: 1,
      project_laborcoef: 1
    }];

  constructor( private clientServ: ClientDctServService,
               private typeServ: TypeprojDictServService) {
  }
  public get(id: number) {
    return this.projectList.find(x => x.project_id === id);
  }

  getList() {
    return this.projectList;
  }

  getClients() {
    return this.clientServ.getList();
  }
  getTypes() {
    return this.typeServ.getList();
  }
}
