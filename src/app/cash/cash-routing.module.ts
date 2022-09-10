import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from '../home/home.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomePage
  },
  {
    path: 'deposit',
    loadChildren: () => import('./money-deposit-form/money-deposit-form.module').then(m => m.MoneyDepositFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashRoutingModule { }
