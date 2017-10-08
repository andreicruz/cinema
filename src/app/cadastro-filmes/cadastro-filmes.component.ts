import { Component, OnInit } from '@angular/core';
import { CrudFilmesService } from "../crud-filmes.service";
import { Filme } from "../filme";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-cadastro-filmes',
  templateUrl: './cadastro-filmes.component.html',
  styleUrls: ['./cadastro-filmes.component.css']
})
export class CadastroFilmesComponent implements OnInit {
  tituloCadastro = "Cadastro de Filmes";
  filme: Filme;
  codigo: number;
  
  constructor(private servico:CrudFilmesService,
              private router:Router,
              private rota: ActivatedRoute) { }

  ngOnInit(){
    this.codigo = this.rota.snapshot.params['cod'];

    if(isNaN(this.codigo)){ 
      this.filme = new Filme(); 
    }else{
      this.filme = Object.assign({}, this.servico.getFilmesPorCodigo(this.codigo));
    }
  }

  salvarFilme(){
    if(isNaN(this.codigo)){
      this.servico.adicionarFilme(this.filme);
      this.filme = new Filme();
    }else{
      this.servico.atualizaFilme(this.codigo, this.filme);
    }
    this.router.navigate(['/lista']);
  }

  cancelar(){ this.router.navigate(['/lista']); }
}
