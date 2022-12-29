import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Observable, of } from 'rxjs';
import { IBeer } from 'src/libs/interfaces/IBeer';
import { ApiModule } from '../api.module';
import { IBeerService } from './api-beers.service.interface';

const beers: IBeer[] = [{
    id: Guid.parse('ac1cc22f-7f4f-4840-b70d-05448a1a81a6'),
    title: 'Test beer',
    alcohol: 4.2,
    image: 'https://picsum.photos/seed/picsum/300/200',
    colour: 'dark',
    type: 'ale',
    author: Guid.parse('4ede6e1b-8d9d-4f8d-9816-a2a1554866ea'),
    authorsNote: 'Test beer enitity',
    barrelAged: 32,
    bitterness: 17,
    colourEBC: 12,
    colourSRM: 23,
    finalGravity: 2,
    originalGravity: 3,
    steps: [{
        id: Guid.parse('6cde6e1b-8d9d-4f8d-9816-a2a1554866ea'),
        comment: 'Step comment test',
        details: 'We boil water and add alhocol',
        name: 'First step',
        order: 0,
        image: 'https://picsum.photos/seed/picsum/400/400'
    }, {
        id: Guid.parse('7cde6e1b-8d9d-4f8d-9816-a2a1554866ea'),
        comment: 'Step comment test 2',
        details: 'We add khmel"',
        name: 'Second step',
        order: 1,
        image: 'https://picsum.photos/seed/picsum/400/400'
    }],
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
        if (!newBeer) {
            throw new Error('Invalid Beer data');
        }
        const beer = { ...newBeer, id: Guid.create() }
        beers.push(beer);

        return of(beer);
    }

    updateBeer(beerToUpdate: IBeer): Observable<IBeer> {
        if (!beerToUpdate.id) {
            throw new Error('Beer must have an Id');
        }

        let beer = beers.find(beer => beer.id?.equals(beerToUpdate.id as Guid));
        if (!beer) {
            throw new Error('Beer not found');
        }

        beer = { ...beerToUpdate, id: beer.id };
        return of(beer);
    }

    deleteBeer(beerId: Guid): Observable<Guid | undefined> {
        const deletedBeer = beers.filter(beer => beer.id?.equals(beerId)).pop();
        if (!deletedBeer) {
            throw new Error('Beer not deleted');
        }
        return of(deletedBeer.id);
    }
}
