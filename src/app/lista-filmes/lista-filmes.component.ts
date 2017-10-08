import { Component, OnInit } from '@angular/core';
import { Filme } from "../filme";
import { CrudFilmesService } from "../crud-filmes.service";

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent implements OnInit {
  titulo = "Lista de Filmes";
  filmes: Filme[]=[];

  constructor(private servico:CrudFilmesService) { }

  ngOnInit() {
    this.filmes = this.servico.getFilmes();
  }

  remover(filme:Filme){
    this.servico.removerFilme(filme);
  }

}
