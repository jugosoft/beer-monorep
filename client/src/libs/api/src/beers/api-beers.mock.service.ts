import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Observable, of } from 'rxjs';

import { IPost, IPostAbstract } from 'src/libs/interfaces';
import { IBeer } from 'src/libs/interfaces/IBeer';
import { ApiModule } from '../api.module';
import { IBeerService } from './api-beers.service.interface';

const beers: IBeer[] = [{
    id: Guid.parse('ac1cc22f-7f4f-4840-b70d-05448a1a81a6'),
    title: 'Test beer',
    alcohol: 4.2,
    author: Guid.parse('4ede6e1b-8d9d-4f8d-9816-a2a1554866ea'),
    authorsNote: 'Test beer enitity',
    barrelAged: 32,
    bitterness: 17,
    colourEBC: 12,
    colourSRM: 23,
    finalGravity: 2,
    originalGravity: 3,
    steps: [],
    createdAt: new Date(),
    updatedAt: new Date()
}];

@Injectable({
    providedIn: ApiModule
})
export class ApiBeersService implements IBeerService {
    getBeers(): Observable<IBeer[]> {
        return of(beers);
    }

    addBeer(newBeer: IBeer): Observable<IBeer> {
        throw new Error('Method not implemented.');
    }

    updateBeer(beerToUpdate: IBeer): Observable<IBeer> {
        throw new Error('Method not implemented.');
    }

    deleteBeer(beerId: Guid): Observable<number | undefined> {
        throw new Error('Method not implemented.');
    }
}
