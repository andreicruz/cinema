import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { CadastroFilmesComponent } from './cadastro-filmes/cadastro-filmes.component';
import { CrudFilmesService } from "./crud-filmes.service";
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CadastroUsuarioService} from "./cadastroUsuarioService/cadastro-usuario.service";
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { FavoritosService} from './favoritosService/favoritos.service';

const routes: Routes = [
  { path: '', redirectTo: 'cadastro', pathMatch: 'full'},
  { path: 'lista', component: ListaFilmesComponent},
  { path: 'edicao/:cod', component: CadastroFilmesComponent},
  { path: 'novo', component: CadastroFilmesComponent},
  { path: 'cadastro', component: CadastroUsuarioComponent},
  { path: 'perfil', component: ListaUsuarioComponent},
  { path: 'perfil/favoritos', component: FavoritosComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListaFilmesComponent,
    CadastroFilmesComponent,
    CadastroUsuarioComponent,
    ListaUsuarioComponent,
    FavoritosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [CrudFilmesService, CadastroUsuarioService, FavoritosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
