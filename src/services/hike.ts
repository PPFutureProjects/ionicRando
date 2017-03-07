import { Injectable } from '@angular/core';
import { Hike } from '../models/hike';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HikeService {
    url: string = '../assets/api/hikes.json';
    constructor(private http: Http) {}

    getHikes(): Observable<Hike> {
        return this.http.get(this.url)
                        .map(response => response.json());
    }


}