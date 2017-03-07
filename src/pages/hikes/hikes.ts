import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HikeService } from '../../services/hike';
import { Hike } from '../../models/hike';

@Component({
  selector: 'hikes',
  templateUrl: 'hikes.html'
})
export class HikesPage implements OnInit {

  hikes: Hike[] = [];

  constructor(private navCtrl: NavController, private hikeService: HikeService) {}

  ngOnInit() {
    this.hikeService.getHikes()
                    .subscribe(
                      (hikes: any) => {
                        this.hikes = hikes;
                        console.log(this.hikes);
                      }
                    )
  }

}
