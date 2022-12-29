import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
    year!: number;

    ngOnInit(): void {
        this.year = new Date().getFullYear();
    }
}
