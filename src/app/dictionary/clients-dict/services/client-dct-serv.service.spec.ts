import { TestBed } from '@angular/core/testing';

import { ClientDctServService } from './client-dct-serv.service';

describe('ClientDctServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientDctServService = TestBed.get(ClientDctServService);
    expect(service).toBeTruthy();
  });
});
