import { TestBed } from '@angular/core/testing';

import { ContactservService } from './Contactserv.service';

describe('ContactservService', () => {
  let service: ContactservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
