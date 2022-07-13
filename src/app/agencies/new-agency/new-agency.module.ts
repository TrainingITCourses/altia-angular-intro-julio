import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewAgencyRoutingModule } from './new-agency-routing.module';
import { NewAgencyComponent } from './new-agency.component';


@NgModule({
  declarations: [
    NewAgencyComponent
  ],
  imports: [
    CommonModule,
    NewAgencyRoutingModule
  ]
})
export class NewAgencyModule { }
