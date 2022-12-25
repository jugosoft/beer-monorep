import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Observable, of } from 'rxjs';
import { IPost } from 'src/libs/interfaces';
import { IBeer } from 'src/libs/interfaces/IBeer';
import { ApiModule } from '../api.module';
import { IBeerService } from './api-beers.service.interface';


@Injectable({
    providedIn: ApiModule
})
export class ApiPostsService implements IBeerService {
    getBeers(): Observable<IBeer[]> {
        throw new Error('Method not implemented.');
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
