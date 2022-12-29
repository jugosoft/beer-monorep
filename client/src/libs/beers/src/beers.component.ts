import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ApiBeersService } from 'src/libs/api';
import { IBeer } from 'src/libs/interfaces';

@Component({
    selector: 'app-beers',
    templateUrl: './beers.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BeersComponent implements OnInit {
    beers!: IBeer[];

    constructor(
        private readonly apiBeers: ApiBeersService
    ) { }

    ngOnInit(): void { 
        this.apiBeers.getBeers().subscribe(beers => this.beers = beers);
    }
}
