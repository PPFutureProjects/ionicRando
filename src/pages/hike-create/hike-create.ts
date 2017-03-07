import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { Hike } from '../../models/hike';
import { HikeService } from '../../services/hike';

@Component({
  selector: 'page-hike-create',
  templateUrl: 'hike-create.html'
})
export class HikeCreatePage {
  hike: Hike;

  constructor(private navCtrl: NavController, private navParams: NavParams, 
                private hikeService: HikeService, private viewCtrl:ViewController) {}

  ngOnInit() {
    this.hike = {
    id: -1,
    name: '',
    area: '',
    region: '',
    startingPoint: '',
    position: {lat: 0, lng: 0},
    distance: 0,
    distanceUnit: 'km',
    duration: 0,
    durationUnit: 'min',
    heightDifference: 0,
    heightDifferenceUnit: 'm',
    description: ''
  };
  }

  addHike(formValue) {
    console.log('addHike:', formValue );
    this.hikeService.createHike(formValue);
    this.viewCtrl.dismiss();
  }

}
