import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { ProdutoDetalheComponent } from '../components/produto-card-detalhe.component';
import { ProdutoCountComponent } from '../components/produto-count.component';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit
{

  produtos: Produto[];

  @ViewChild(ProdutoCountComponent,{ static: false }) contador : ProdutoCountComponent;
  @ViewChild('teste', { static: false }) mensagemTela: ElementRef;
  @ViewChildren(ProdutoDetalheComponent) botoes: QueryList<ProdutoDetalheComponent>;

  constructor() { }

  ngOnInit()
  {
    this.produtos = [{
      id: 1,
      nome: 'Teste',
      ativo: true,
      valor: 100,
      imagem: 'celular.jpg'
    },
    {
      id: 2,
      nome: 'Teste 2',
      ativo: true,
      valor: 200,
      imagem: 'gopro.jpg'
    },
    {
      id: 3,
      nome: 'Teste 3',
      ativo: true,
      valor: 300,
      imagem: 'laptop.jpg'
    },
    {
      id: 4,
      nome: 'Teste 4',
      ativo: true,
      valor: 400,
      imagem: 'mouse.jpg'
    },
    {
      id: 5,
      nome: 'Teste 5',
      ativo: true,
      valor: 500,
      imagem: 'teclado.jpg'
    },
    {
      id: 6,
      nome: 'Teste 6',
      ativo: false,
      valor: 600,
      imagem: 'headset.jpg'
    }];
  }

  ngAfterViewInit(): void
  {
    console.log('obejeto do contador: ', this.contador.produtos );

    let clickTexto: Observable<any> = fromEvent(this.mensagemTela.nativeElement,'click');
    clickTexto.subscribe(() =>{alert('clicou no texto');
      return;
    });

    console.log(this.botoes);
    this.botoes.forEach(lbda => {
      console.log(lbda.produto);
    })
  }

  //o evento ira receber um produto
  mudarStatus(event: Produto)
  {
    event.ativo = !event.ativo;//recebe o inverso do estado atual
  }

}
