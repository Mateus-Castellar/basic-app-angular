import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
})
export class ListaProdutoComponent implements OnInit {

  constructor(private produtoService:ProdutoService) { }

  public produtos: Produto[];

  //executa sempre apos sair do construtor
  ngOnInit(): void 
  {
    this.produtoService.obterProdutos()
    .subscribe({
      next: (sucesso) =>
      {
        this.produtos = sucesso;
         console.log(sucesso);
      },
      error: (erro) =>console.error(erro),
      complete: () => console.info('foi completado aqui')}) 
  }
}