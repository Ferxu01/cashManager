import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.page.html',
  styleUrls: ['./select-option.page.scss'],
})
export class SelectOptionPage implements OnInit {

  constructor(private router: Router, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  openDepositForm() {
    this.closeModal();
    this.router.navigate(['/cash', 'deposit']);

  }

  openTakeOutForm() {
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
