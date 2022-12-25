import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';
import { IBeer } from 'src/libs/interfaces/IBeer';


export interface IBeerService {
    getBeers(): Observable<IBeer[]>;
    addBeer(newBeer: IBeer): Observable<IBeer>;
    updateBeer(beerToUpdate: IBeer): Observable<IBeer>;
    deleteBeer(beerId: Guid): Observable<number | undefined>;
}
