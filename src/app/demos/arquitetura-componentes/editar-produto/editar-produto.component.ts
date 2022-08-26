import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/demos/arquitetura-componentes/models/produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
})

export class EditarProdutoComponent implements OnInit  {
  
produto: Produto;

constructor(private route: ActivatedRoute, private produtoService: ProdutoService) {}

  ngOnInit()
  {
    this.route.params
      .subscribe(params => {
        this.produto = this.produtoService.obterPorId(params['id']);//subs => so retornara se tiver o valor disponivel
      })
  }
}