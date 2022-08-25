import { Component, Input } from "@angular/core";
import { Produto } from "src/app/demos/arquitetura-componentes/models/produto";

@Component({
    selector: 'produto-card-detalhe',
    templateUrl: './produto-card-detalhe.component.html',
})

export class ProdutoDetalheComponent{
    @Input()
    produto: Produto;
}