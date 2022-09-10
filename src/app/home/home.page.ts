import { Component, OnInit } from '@angular/core';
import { OptionsModalComponent } from '../components/options-modal/options-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private optionsModal: OptionsModalComponent) { }

  ngOnInit() {
  }

  async showOptions() {
    this.optionsModal.openModal();
  }

}
