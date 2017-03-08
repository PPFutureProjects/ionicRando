import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { Hike } from '../../models/hike';
import {HikeCurrentPage } from '../hike-current/hike-current';
import { HikeService } from '../../services/hike';

@Component({
  selector: 'hike-details',
  templateUrl: 'hike-details.html'
})
export class HikeDetailsPage implements OnInit {
  hike: Hike;
  isPositionVisible: boolean = false;
  legs = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, private modalCtrl: ModalController, private hikeService: HikeService) {}

  ngOnInit() {
    this.hike = this.navParams.get('hike');
    console.log('will retrieve legs from ', this.hike);
    this.legs = this.hikeService.getLegs(this.hike.id);
    console.log('ngOnInit legs:', this.legs);
    console.log('ngOnInit hike:', this.hike);
  }

  showPosition() {
    this.isPositionVisible = !this.isPositionVisible;
  }

  addCommentary(hike: Hike) {    
    const modal = this.modalCtrl.create(HikeCurrentPage, { hike: hike, time: new Date().toISOString() });
    modal.present();
    modal.onDidDismiss((data) => {
      console.log('recu depuis modal',data);
      this.legs = [...this.legs, data];
      this.hikeService.addLeg(data);
      console.log('addCommentary:', this.legs)
    })
  }

}
