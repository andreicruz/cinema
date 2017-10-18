import { Component, OnInit } from '@angular/core';
import { Pessoa } from "../pessoa";
import { CadastroUsuarioService } from "../cadastroUsuarioService/cadastro-usuario.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {
  pessoa: Pessoa;

  constructor(private servico: CadastroUsuarioService, private router: Router) { }

  ngOnInit() { this.pessoa = new Pessoa(); }

  salvarPessoa(){
    this.servico.adicionarPessoa(this.pessoa);
    this.pessoa = new Pessoa();
    this.router.navigate(["/lista"]);
  }
}
