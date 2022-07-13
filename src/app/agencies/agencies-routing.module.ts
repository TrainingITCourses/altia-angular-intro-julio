import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgenciesComponent } from './agencies.component';

const routes: Routes = [
  { path: '', component: AgenciesComponent },
  {
    path: 'new',
    loadChildren: () =>
      import('./new-agency/new-agency.module').then((m) => m.NewAgencyModule),
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./view-agency/view-agency.module').then(
        (m) => m.ViewAgencyModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgenciesRoutingModule {}
