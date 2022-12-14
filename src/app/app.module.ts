import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoService } from './produtos/produtos.service';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { CadastroComponent } from './demos/reactiveForms/cadastro/cadastro.component';
import { CustomFormsModule } from 'ng2-validation';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { AppRoutingModule } from './app.roteamento';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';
import { FilePipeSize } from './demos/pipes/filmes/filesize.pipe';
import { ImageFormatPipe } from './demos/pipes/filmes/image.pipe';

@NgModule({
  declarations: [//componentes
    AppComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ListaProdutoComponent,
    FilmesComponent,
    CadastroComponent,
    FilePipeSize,
    ImageFormatPipe,
  ],
  imports: [//modulos
    NavegacaoModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CustomFormsModule,
    AppRoutingModule
  ],
  providers: [//servicos
    ProdutoService,
    AuthGuard,
    CadastroGuard,
    // { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }