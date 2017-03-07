import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { Hike } from '../../models/hike';

@Component({
  selector: 'hike-current',
  templateUrl: 'hike-current.html'
})
export class HikeCurrentPage implements OnInit {
  hike: Hike;
  time: number;
  leg = {};

  difficulties = [
    { text: 'très facile', value: 'veasy' },
    { text: 'facile', value: 'easy' },
    { text: 'difficile', value: 'hard' },
    { text: 'très difficile', value: 'vhard' },
    { text: 'impossible', value: 'impossible' },
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

  ngOnInit() {
    this.hike = this.navParams.get('hike');
    this.time = this.navParams.get('time');
  }

  addCommentary(formValue) {
    console.log(formValue);
    this.viewCtrl.dismiss({ leg: formValue});    
  }
  

}
