import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';
import { ApiUsersService } from 'src/libs/api';
import { IUser } from 'src/libs/interfaces';


@Component({
    selector: 'app-main',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {
    users$?: Observable<IUser[]>;
    isNew = false;

    constructor(
        private readonly usersService: ApiUsersService,
        private readonly router: Router
    ) { }

    ngOnInit(): void {
        this.users$ = this.usersService.getUsers();
    }

    isNewTrigger(): void {
        this.isNew = !this.isNew;
    }

    submitUser(user: IUser): void {
        this.usersService.addUser(user).subscribe(user => {
            if (user) {
                this.isNewTrigger();
                this.router.navigate(['/users', user.id]);
            }
        })
    }
}
