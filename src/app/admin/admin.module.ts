import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { AdminRouterConfig } from "./admin.route";

 

 @NgModule({
    declarations:[
        AdminDashboardComponent

    ],
    imports: [
        CommonModule,
        AdminRouterConfig,
    ],
    providers: [

    ],
    exports:[]
 })

 export class AdminModule{}