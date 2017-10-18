import { Injectable } from '@angular/core';
import { Pessoa } from "../pessoa";

@Injectable()
export class CadastroUsuarioService {
  pessoas: Pessoa[] = [];

  constructor() { }

  getPessoa(){
    return this.pessoas;
  }

  adicionarPessoa(pessoa:Pessoa){
    this.pessoas.push(pessoa);
  }
}

