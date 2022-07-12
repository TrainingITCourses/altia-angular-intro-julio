import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReloadComponent } from './reload/reload.component';



@NgModule({
  declarations: [
    ReloadComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReloadComponent
  ]
})
export class SharedModule { }
