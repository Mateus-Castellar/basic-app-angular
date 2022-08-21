import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: [
  ]
})

export class DataBindingComponent {

  public contadorClique: number = 2;
  public urlImagem: string = "https://angular.io/assets/images/logos/angular/angular.svg";
  public nome: string = "";


  adicionarClique()
  {
    this.contadorClique ++;
  }

  removerClique()
  {
    this.contadorClique --;

    if(this.contadorClique < 0)
    {
      alert('Atenção o número não pode ser negativo');
      this.contadorClique = 0;
    }
  }

  zerarContador()
  {
    this.contadorClique = 0;
  }

  // KeyUp(event: any)
  // {
  //   this.nome = event.target.value;
  // }

}
