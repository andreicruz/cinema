import { Injectable } from '@angular/core';
import { Filme } from "./filme";

@Injectable()
export class CrudFilmesService {
  filmes: Filme[] = [
    { codigo: 1, 
      nome:"Kill Bill", 
      descricao:"Teste", 
      data: new Date(),
      imagem: "images/RoseQuartz.png"}
  ];

  autoIncremento:number=2;

  constructor() { }

  getFilmes(){
    return this.filmes;
  }

  adicionarFilme(filme:Filme){
    filme.codigo = this.autoIncremento++;
    this.filmes.push(filme);
  }

  getFilmesPorCodigo(codigo: number){
    return(this.filmes.find(filme => filme.codigo==codigo));
  }

  removerFilme(filme:Filme){
    let indice = this.filmes.indexOf(filme, 0);
    if (indice > -1){
      this.filmes.splice(indice, 1);
    }
  }
  
  atualizaFilme(codigo:number, filme:Filme){
    let indice = this.filmes.indexOf(this.getFilmesPorCodigo(codigo), 0);
    this.filmes[indice] = filme;
  }

}
