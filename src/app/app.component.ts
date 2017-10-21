import { Component } from '@angular/core';
import { Pessoa } from "./pessoa";
import { CadastroUsuarioService } from "./cadastroUsuarioService/cadastro-usuario.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tituloAplicacao = 'FILMES';
  pessoas: Pessoa[]=[];

  constructor(private servico:CadastroUsuarioService) { }
  
  ngOnInit() {
    this.pessoas = this.servico.getPessoa();
  }
}
