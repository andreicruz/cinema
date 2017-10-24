import { Injectable } from '@angular/core';
import { Filme } from "../filme";

@Injectable()
export class FavoritosService {
  favoritos: Filme[] = [];

  constructor() { }

  getFavoritos(){
    return(this.favoritos);
  }

  adicionarFavorito(filme:Filme){
    this.favoritos.push(filme);
  }

  removerFavorito(filme:Filme){
    let indice = this.favoritos.indexOf(filme, 0);
    if (indice > -1){
      this.favoritos.splice(indice, 1);
    }
  }
}
