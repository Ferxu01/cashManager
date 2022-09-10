import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectOptionPageRoutingModule } from './select-option-routing.module';

import { SelectOptionPage } from './select-option.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    SelectOptionPageRoutingModule
  ],
  declarations: [SelectOptionPage]
})
export class SelectOptionPageModule {}
