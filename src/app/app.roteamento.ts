import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProdutoDashboardComponent } from "./demos/arquitetura-componentes/produto-dashboard/produto-dashboard.component";
import { DataBindingComponent } from "./demos/data-binding/data-binding.component";
import { CadastroComponent } from "./demos/reactiveForms/cadastro/cadastro.component";
import { ContatoComponent } from "./institucional/contato/contato.component";
import { SobreComponent } from "./institucional/sobre/sobre.component";
import { HomeComponent } from "./navegacao/home/home.component";
import { ListaProdutoComponent } from "./produtos/lista-produto/lista-produto.component";

export const rootRouterConfig: Routes =
  [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'feature-data-binding', component: DataBindingComponent },
    { path: 'produtos', component: ListaProdutoComponent },
    { path: 'cadastro', component: CadastroComponent },
    {
      //carregando subModulo com lazy load
      path: 'produtos-dashboard',
      loadChildren: () => import('./demos/arquitetura-componentes/produto.module')
        .then(m => m.ProdutoModule)
    },

    //exemplo de como passar parametro na rota (id)
    //{ path: 'produto-detalhe/:id', component: ListaProdutoComponent }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(rootRouterConfig),
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }