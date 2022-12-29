import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeersRoutingModule } from './beers-routing.module';
import { BeersComponent } from './beers.component';
import { BeerComponent } from './beer/beer.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';

@NgModule({
    declarations: [
        BeersComponent,
        BeerComponent,
        BeerDetailsComponent
    ],
    imports: [
        CommonModule,
        BeersRoutingModule
    ],
})
export class BeersModule { }
