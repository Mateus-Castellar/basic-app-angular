//SubModulo da aplicacao

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
    declarations: [
        MenuComponent,
        HomeComponent,
        RodapeComponent,
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports:[
        MenuComponent,
        HomeComponent,
        RodapeComponent,
    ]
})

export class NavegacaoModule 
{

} 