import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoneyDepositFormPageRoutingModule } from './money-deposit-form-routing.module';

import { MoneyDepositFormPage } from './money-deposit-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoneyDepositFormPageRoutingModule
  ],
  declarations: [MoneyDepositFormPage]
})
export class MoneyDepositFormPageModule {}
