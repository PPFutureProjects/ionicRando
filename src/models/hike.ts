import { Injectable } from '@angular/core';
import { Position } from './position';

export interface Hike {
    id: number;
    name: string;
    area: string;
    region: string;
    startingPoint: string;
    position: Position;
    distance: number;
    distanceUnit: string;
    duration: number;
    durationUnit: string;
    heightDifference?: number;
    heightDifferenceUnit?: string;
    description: string;
}

