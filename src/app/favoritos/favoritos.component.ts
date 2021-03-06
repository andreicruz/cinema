import { Component, OnInit } from '@angular/core';
import { Filme } from "../filme";
import { FavoritosService} from "../favoritosService/favoritos.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  favoritos: Filme[]=[];
  
  constructor(private servico:FavoritosService) { }

  ngOnInit() { 
    this.favoritos = this.servico.getFavoritos(); 
    console.log(this.favoritos);
  }

  removerFavorito(filme:Filme){
    this.servico.removerFavorito(filme);
  }
}
