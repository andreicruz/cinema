import { Component, OnInit } from '@angular/core';
import { Filme } from "../filme";
import { CrudFilmesService } from "../crud-filmes.service";
import { FavoritosService} from "../favoritosService/favoritos.service";

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent implements OnInit {
  titulo = "Lista de Filmes";
  filmes: Filme[]=[];

  constructor(private servico:CrudFilmesService,
              private servicoFavoritos: FavoritosService) { }

  ngOnInit() {
    this.filmes = this.servico.getFilmes();
  }

  salvarFavorito(filme:Filme){
    this.servicoFavoritos.adicionarFavorito(filme);
  }

  remover(filme:Filme){
    this.servico.removerFilme(filme);
  }
}
