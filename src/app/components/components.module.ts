import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsModalComponent } from './options-modal/options-modal.component';



@NgModule({
  declarations: [OptionsModalComponent],
  imports: [
    CommonModule
  ],
  exports: [
    OptionsModalComponent
  ]
})
export class ComponentsModule { }
