import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})

export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;
  usuario: Usuario;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      cpf: [''],
      email: [''],
      senha: [''],
      senhaConfirmacao: [''],
    });
  }

  adicionarUsuario(){
    //passa os dados do form em um objeto do tipo 'usuario'
    this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
  }
}