import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-money-deposit-form',
  templateUrl: './money-deposit-form.page.html',
  styleUrls: ['./money-deposit-form.page.scss'],
})
export class MoneyDepositFormPage implements OnInit {
  lastAccountMoney = 0;
  depositQuantity: number;

  constructor() { }

  ngOnInit() {
  }

  setData() {
    localStorage.setItem('accountMoney', this.lastAccountMoney+this.depositQuantity+'');
  }

  /*setMoneyQuantity(event) {
    this.depositQuantity = event.detail.value;
  }*/

  setValue(event) {
    this.depositQuantity = event.detail.value;
    console.log('Quantity: '+this.depositQuantity);
  }

}
