import { TestBed, inject } from '@angular/core/testing';

import { CrudFilmesService } from './crud-filmes.service';

describe('CrudFilmesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudFilmesService]
    });
  });

  it('should be created', inject([CrudFilmesService], (service: CrudFilmesService) => {
    expect(service).toBeTruthy();
  }));
});
