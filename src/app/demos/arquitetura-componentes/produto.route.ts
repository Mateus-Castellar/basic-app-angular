import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditarProdutoComponent } from "./editar-produto/editar-produto.component";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoAppComponent } from "./produto.app.component";

const produtoRouterConfig: Routes = [
  {
    path: '', component: ProdutoAppComponent, children: [
      { path: '', component: ProdutoDashboardComponent },
      { path: 'editar/:id', component: EditarProdutoComponent }
    ]
  },
];

@NgModule({

  imports: [
    //modulo de roteamento para um modulo 'filho'
    RouterModule.forChild(produtoRouterConfig)
  ],
  exports: [
    RouterModule
  ]
})
export class produtoRoutingModule { }