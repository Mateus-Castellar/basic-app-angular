import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Produto } from "src/app/demos/arquitetura-componentes/models/produto";

@Component({
    selector: 'produto-card-detalhe',
    templateUrl: './produto-card-detalhe.component.html',
})

export class ProdutoDetalheComponent
{
    @Input()
    produto: Produto;


    @Output()
    status: EventEmitter<any> = new EventEmitter();//generico, poderia ser especializado com <Produto>

    emitirEvento()
    {
        this.status.emit(this.produto);
    }
}
