import { TestBed, inject } from '@angular/core/testing';

import { CadastroUsuarioService } from './cadastro-usuario.service';

describe('CadastroUsuarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CadastroUsuarioService]
    });
  });

  it('should be created', inject([CadastroUsuarioService], (service: CadastroUsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
