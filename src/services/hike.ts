import { Injectable } from '@angular/core';
import { Hike } from '../models/hike';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HikeService {
    url: string = '../assets/api/hikes.json';
    legs = [];

    constructor(private http: Http) {}

    getHikes(): Observable<Hike> {
        return this.http.get(this.url)
                        .map(response => response.json());
    }

    getLegs(hikeId: number) {
        return this.legs.filter(leg => leg.hikeId === hikeId);
    }

    addLeg(leg) {
        this.legs = [...this.legs, leg];
    }


}