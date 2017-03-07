import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Hike } from '../../models/hike';

@Component({
  selector: 'hike-details',
  templateUrl: 'hike-details.html'
})
export class HikeDetailsPage implements OnInit {
  hike: Hike;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ngOnInit() {
    this.hike = this.navParams.get('hike');
  }


}
