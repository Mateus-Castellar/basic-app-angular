import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})

export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.cadastroForm = new FormGroup({
      nome: new FormControl(''),
      cpf: new FormControl(''),
      email: new FormControl(''),
      senha: new FormControl(''),
      senhaConfirmacao: new FormControl(''),
    });
  }


  adicionarUsuario(){
    let dadosRetornadosCadastro = this.cadastroForm.value;
  }
}