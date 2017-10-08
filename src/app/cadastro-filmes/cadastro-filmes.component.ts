import { Component, OnInit } from '@angular/core';
import { CrudFilmesService } from "../crud-filmes.service";
import { Filme } from "../filme";
import { Router } from "@angular/router";

@Component({
  selector: 'app-cadastro-filmes',
  templateUrl: './cadastro-filmes.component.html',
  styleUrls: ['./cadastro-filmes.component.css']
})
export class CadastroFilmesComponent implements OnInit {
  tituloCadastro = "Cadastro de Filmes";
  filme:Filme;
  
  constructor(private servico:CrudFilmesService,
              private router:Router) { }

  ngOnInit()  { this.filme = new Filme(); }

  salvarFilme(){
    this.servico.adicionarFilme(this.filme);
    this.router.navigate(['/lista']);
  }

  cancelar(){ this.router.navigate(['/lista']); }
}
