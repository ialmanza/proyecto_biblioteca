import { TestBed } from '@angular/core/testing';

import { LibrosServicioService } from './libros-servicio.service';

describe('LibrosServicioService', () => {
  let service: LibrosServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrosServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
