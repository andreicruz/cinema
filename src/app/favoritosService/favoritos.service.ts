import { Injectable } from '@angular/core';
import { Filme } from "../filme";

@Injectable()
export class FavoritosService {
  favoritos: Filme[] = [
    { codigo: 1, 
      nome:"Kill Bill", 
      descricao:"Teste", 
      data: new Date(),
      imagem: "images/RoseQuartz.png"}
  ];

  autoIncremento:number=2;
  
  constructor() { }

  getFavoritos(){
    return this.favoritos;
  }

  adicionarFavorito(favorito:Filme){
    favorito.codigo = this.autoIncremento++;
    this.favoritos.push(favorito);
  }
}
