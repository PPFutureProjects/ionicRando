import { Injectable } from '@angular/core';
import { Hike } from '../models/hike';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class HikeService {
    url: string = '../assets/api/hikes.json';
    legs = [];
    hikes: Hike[] =  [
        {
            id: 1,
            name: "Saint-Aubun-du-Cormier",
            region: "Bretagne",
            area: "Ille-et-Vilaine",
            startingPoint: "Plan d'eau",
            position: {
                lat: 48.259909,
                lng: -1.396108
            },
            distance: 12.8,
            distanceUnit: "km",
            duration: 240,
            durationUnit: "m",
            heightDifference: 267,
            heightDifferenceUnit: "m",
            description: "Mock. Randonnée sympa, à démarrer par le plan d'eau pour finir sur les hauteurs de Saint Aubin. Rochers imposants et des arbres magnifiques sont effectivement au rendez-vous. Bonne balade"
        },
        {
            id: 2,
            name: "Vallée du Couesnon",
            region: "Bretagne",
            area: "Ille-et-Vilaine",
            startingPoint: "Château de la ville olivier",
            position: {
	            lat: 48.307286,
	            lng: -1.433306
	        },
            distance: 15.6,
            distanceUnit: "km",
            duration: 270,
            durationUnit: "m",
            heightDifference: 200,
            heightDifferenceUnit: "m",
            description: "Mock. Il faut être en forme pour cette rando car il y a beaucoup de dénivelés. Mais le jeu en vaut la chandelle car admirer les bords du Couesnon est un régal. Bonne randonnée "
        },
        {
            id: 3,
            name: "Saint Quentin Fallavier",
            region: "Rhône Alpes",
            area: "Isère",
            startingPoint: "étang de Fallavier",
            position: {
	            lat: 45.618760,
	            lng: 5.129525
	        },  
            distance: 6,
            distanceUnit: "km",
            duration: 90,
            durationUnit: "m",
            heightDifference: 267,
            heightDifferenceUnit: "m",
            description: "Mock. L'occasion de visiter un des deux chateaux dans lequel a été tourné Kaamelott. A ceux qui vous diront que le point de vue du haut du donjon est panoramique, vous pourrez répondre : c'est pas faux"
        }
    ];

    constructor(private http: Http) {}

    // getHikes(): Observable<Hike> {
    //     return this.http.get(this.url)
    //                     .map(response => response.json());
    // }

    retrieveFromStorage(key) {
        let allHikes = [];
        let hikesFromStorage = localStorage.getItem(key);
        if(hikesFromStorage !== null) {
            allHikes = JSON.parse(hikesFromStorage);
        } 
        return allHikes; 
    }

    getHikes(): Observable<Hike[]> {
        let hikesFromStorage = this.retrieveFromStorage('hikes');
        console.log('hikesFromStorage getHikes: ', hikesFromStorage);
        return Observable.of(hikesFromStorage);
    }

    createHike( hike: Hike) {
        let hikesFromStorage = this.retrieveFromStorage('hikes');
        hike.id = hikesFromStorage.length;
        let allHikes = [...hikesFromStorage, hike];
        console.log('allHikes createHike: ', allHikes);
        localStorage.setItem('hikes', JSON.stringify(allHikes));
    }

    getLegs(hikeId: number) {
        let legsFromStorage = this.retrieveFromStorage('legs');
        const legs = legsFromStorage.filter(leg => leg.hikeId === hikeId);
        console.log('getLegs service:', legs);
        return legs;
    }

    addLeg(leg) {
        let legsFromStorage = this.retrieveFromStorage('legs');
        this.legs = [...legsFromStorage, leg];
        console.log('addLeg service:', this.legs);
        localStorage.setItem('legs', JSON.stringify(this.legs));
    }


}