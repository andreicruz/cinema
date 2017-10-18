import { Component, OnInit } from '@angular/core';
import { CadastroUsuarioService } from "../cadastroUsuarioService/cadastro-usuario.service";
import { Pessoa } from "../pessoa";

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {
  titulo = "Perfil";
  pessoas: Pessoa[]=[];

  constructor(private servico:CadastroUsuarioService) { }

  ngOnInit() {
    this.pessoas = this.servico.getPessoa();
  }

}
