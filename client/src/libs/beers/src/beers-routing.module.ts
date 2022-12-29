import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/libs/auth/src/auth.guard';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeersComponent } from './beers.component';


const routes: Routes = [{
    path: '',
    component: BeersComponent,
}, {
    path: ':id', canActivate: [AuthGuard], component: BeerDetailsComponent
}, {
    path: '**', redirectTo: '/'
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BeersRoutingModule { }
