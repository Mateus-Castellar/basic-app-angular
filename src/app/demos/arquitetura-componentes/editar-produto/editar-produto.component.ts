import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/demos/arquitetura-componentes/models/produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
})

export class EditarProdutoComponent implements OnInit  {
  
produto: Produto;

constructor(private route: ActivatedRoute, private produtoService: ProdutoService,
  private router: Router) {}

  ngOnInit()
  {
    this.route.params
      .subscribe(params => {
        this.produto = this.produtoService.obterPorId(params['id']);//subs => so retornara se tiver o valor disponivel
      })
  }

  salvar(){
    //this.router.navigateByUrl('/produtos-dashboard'); => navega via Url (cuidado!)
    this.router.navigate(['/produtos-dashboard']);
  }
}