import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})

export class MenuComponent {
  nav: Nav[] = [
    {
      link: '/home',
      name: 'Home',
      exact: true,
      admin: false
    },
    {
      link: '/cadastro',
      name: 'Cadastro',
      exact: true,
      admin: false
    },
    {
      link: '/sobre',
      name: 'Sobre',
      exact: true,
      admin: false
    },
    {
      link: '/produtos-dashboard',
      name: 'Produtos',
      exact: false,//nao precisa ser exatamente a msm rota
      admin: false
    },
    {
      link: '/admin',
      name: 'Admin',
      exact: false,
      admin: false
    }
  ];
}

interface Nav{
  link:string,
  name:string,
  exact:boolean,
  admin:boolean,
}