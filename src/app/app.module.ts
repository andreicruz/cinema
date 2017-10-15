import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { CadastroFilmesComponent } from './cadastro-filmes/cadastro-filmes.component';
import { CrudFilmesService } from "./crud-filmes.service";
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';

const routes: Routes = [
  { path: '', redirectTo: 'lista', pathMatch: 'full'},
  { path: 'lista', component: ListaFilmesComponent},
  { path: 'edicao/:cod', component: CadastroFilmesComponent},
  { path: 'novo', component: CadastroFilmesComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ListaFilmesComponent,
    CadastroFilmesComponent,
    CadastroUsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CrudFilmesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
