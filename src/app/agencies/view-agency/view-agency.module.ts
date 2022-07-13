import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewAgencyRoutingModule } from './view-agency-routing.module';
import { ViewAgencyComponent } from './view-agency.component';


@NgModule({
  declarations: [
    ViewAgencyComponent
  ],
  imports: [
    CommonModule,
    ViewAgencyRoutingModule
  ]
})
export class ViewAgencyModule { }
