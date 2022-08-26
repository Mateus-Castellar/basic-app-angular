import { Injectable } from "@angular/core";
import {  CanActivate, CanLoad, } from "@angular/router";

@Injectable()
export class AuthGuard implements CanLoad, CanActivate
{
    //dado mock para teste
    //para alterar acesso a propriedade admin basta alterar para true/false
    user = { admin: true, logged: true };

    canLoad(): boolean
    {
        //so pode carregar o modulo se o usuario for adminstrador
        //evita gastar recursos de maquina e internet desnecessarios
        return this.user.admin;
    }

    canActivate(): boolean
    {
        //canActivate => pode carregar mas nao pode acessar
        return this.user.logged;
    }
}