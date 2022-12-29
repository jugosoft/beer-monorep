import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';

import { ApiBeersService } from 'src/libs/api';
import { IBeer } from 'src/libs/interfaces';

@Component({
    selector: 'app-beer',
    templateUrl: './beer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeerComponent implements OnInit {
    @Input() beerId!: Guid;
    beer!: IBeer;

    constructor(
        private readonly apiBeers: ApiBeersService,
        private readonly router: Router,
        private readonly activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.apiBeers.getBeers().subscribe(beers => {
            const postFiltered = beers.filter(beer => beer.id?.equals(this.beerId)).pop();
            if (postFiltered) {
                this.beer = postFiltered;
            }
        });
    }

    gotoBeerDetails(beerId?: Guid): void {
        if (!beerId) {
            return;
        }
        this.router.navigate(['/beers', beerId.toString()], { relativeTo: this.activatedRoute });
    }
}
