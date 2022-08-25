import { Component, Input } from "@angular/core";
import { Produto } from "../models/produto";


//Componentes com html basicos podem ser escritos dentro do template e nao em um arquivo separado
@Component({
    selector: 'produto-count',
    template: `
        <div>
            <h3>Produtos</h3>
            <div>
                Produtos Ativos: {{contadorAtivos()}} no total de {{produtos.length}} produtos<br><br>
            </div>
        </div> 
    `
})
export class ProdutoCountComponent 
{
    @Input()
    produtos: Produto[];

    contadorAtivos(): number
    {
        if (!this.produtos) 
            return null;

        return this.produtos.filter((produto: Produto) => produto.ativo).length;
    }
}

