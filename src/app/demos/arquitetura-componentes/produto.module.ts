import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { produtoRoutingModule } from "./produto.route";

import { registerLocaleData } from "@angular/common";
import localePt from '@angular/common/locales/pt'
import { ProdutoDetalheComponent } from "./components/produto-card-detalhe.component";
import { ProdutoCountComponent } from "./components/produto-count.component";
registerLocaleData(localePt);

@NgModule({
    declarations: [
        ProdutoDashboardComponent,
        ProdutoDetalheComponent,
        ProdutoCountComponent
    ],
    imports: [
        CommonModule,
        produtoRoutingModule
    ],
    exports:[]
})

export class ProdutoModule{}