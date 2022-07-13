import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAgencyComponent } from './view-agency.component';

const routes: Routes = [{ path: '', component: ViewAgencyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewAgencyRoutingModule { }
