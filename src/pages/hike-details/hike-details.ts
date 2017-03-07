import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { Hike } from '../../models/hike';
import {HikeCurrentPage } from '../hike-current/hike-current';

@Component({
  selector: 'hike-details',
  templateUrl: 'hike-details.html'
})
export class HikeDetailsPage implements OnInit {
  hike: Hike;
  isPositionVisible: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {}

  ngOnInit() {
    this.hike = this.navParams.get('hike');
  }

  showPosition() {
    this.isPositionVisible = !this.isPositionVisible;
  }

  addCommentary(hike: Hike) {    
    const modal = this.modalCtrl.create(HikeCurrentPage, { hike: hike, time: Date.now() });
    modal.present();
    modal.onDidDismiss((data) => {
      console.log('recu depuis modal',data);
    })
  }


}
