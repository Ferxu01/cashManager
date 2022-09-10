import { Component, Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SelectOptionPage } from 'src/app/main/select-option/select-option.page';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-options-modal',
  template: '',
  styles: [],
})
export class OptionsModalComponent {

  constructor(private modalCtrl: ModalController) { }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: SelectOptionPage
    });
    return await modal.present();
  }

  cancel() {
    this.modalCtrl.dismiss();
  }

}
