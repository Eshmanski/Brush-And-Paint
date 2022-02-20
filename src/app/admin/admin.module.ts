import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import { CreatePageComponent } from './create-page/create-page.component';
import {AdminService} from "./shared/services/admin.service";



@NgModule({
  declarations: [
    AdminLayoutComponent,
    CreatePageComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: '', component: CreatePageComponent}
        ]
      }
    ])
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule { }
