import { Injectable } from '@angular/core';

export interface Hike {
    id: number;
    name: string;
    area: string;
    region: string;
    startingPoint: string;
    distance: number;
    distanceUnit: string;
    duration: number;
    durationUnit: string;
    heightDifference?: number;
    heightDifferenceUnit?: string;
    description: string;
}