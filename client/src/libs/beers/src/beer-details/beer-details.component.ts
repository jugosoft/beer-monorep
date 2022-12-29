import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { ApiBeersService } from 'src/libs/api';
import { IBeer } from 'src/libs/interfaces';

@Component({
    selector: 'app-beer-details',
    templateUrl: './beer-details.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeerDetailsComponent implements OnInit {
    beer!: IBeer;

    constructor(
        private readonly apiBeers: ApiBeersService,
        private readonly router: Router,
        private readonly activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            this.apiBeers.getBeers().subscribe(beers => {
                const postFiltered = beers.filter(beer => beer.id?.equals(Guid.parse(params['id']))).pop();
                if (postFiltered) {
                    this.beer = postFiltered;
                } else {
                    this.router.navigate(['/beers']);
                }
            });
        });
    }
}
