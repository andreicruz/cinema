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
import { CadastroUsuarioService} from "./cadastroUsuarioService/cadastro-usuario.service";
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';

const routes: Routes = [
  { path: '', redirectTo: 'cadastro', pathMatch: 'full'},
  { path: 'lista', component: ListaFilmesComponent},
  { path: 'edicao/:cod', component: CadastroFilmesComponent},
  { path: 'novo', component: CadastroFilmesComponent},
  { path: 'cadastro', component: CadastroUsuarioComponent},
  { path: 'perfil', component: ListaUsuarioComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListaFilmesComponent,
    CadastroFilmesComponent,
    CadastroUsuarioComponent,
    ListaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CrudFilmesService, CadastroUsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
