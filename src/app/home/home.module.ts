import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AgenciesComponent } from './agencies/agencies.component';
import { HomeComponent } from './home.component';
import { TripsComponent } from './trips/trips.component';
import { AgencyItemComponent } from './agencies/agency-item/agency-item.component';

@NgModule({
  declarations: [HomeComponent, AgenciesComponent, TripsComponent, AgencyItemComponent],
  imports: [CommonModule, SharedModule],
  exports: [HomeComponent],
})
export class HomeModule {}
