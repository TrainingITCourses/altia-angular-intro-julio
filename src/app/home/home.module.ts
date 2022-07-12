import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { AgenciesComponent } from './agencies/agencies.component';
import { TripsComponent } from './trips/trips.component';

@NgModule({
  declarations: [HomeComponent, AgenciesComponent, TripsComponent],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class HomeModule {}
