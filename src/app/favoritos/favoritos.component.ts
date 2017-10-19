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
  favorito: Filme;
  codigo: number;

  constructor(private servico:FavoritosService,
              private router: Router) { }

  ngOnInit() { this.favorito = new Filme(); }

  salvarFavorito(){
    if(isNaN(this.codigo)){
      this.servico.adicionarFavorito(this.favorito);
      this.favorito = new Filme();
    }
  }
}
