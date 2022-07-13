import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewAgencyComponent } from './new-agency.component';

const routes: Routes = [{ path: '', component: NewAgencyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewAgencyRoutingModule { }
