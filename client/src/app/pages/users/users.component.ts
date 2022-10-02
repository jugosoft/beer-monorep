import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/IUser';
import { GET_ALL_USERS, IGET_ALL_USERS } from './gql/get-all-users';
import { UsersService } from './users.service';


@Component({
  selector: 'app-main',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {
  users$?: Observable<IUser[]>;
  isNew: boolean = false;

  constructor(
    private readonly usersService: UsersService,
    private readonly router: Router,
  ) {
  }

  ngOnInit(): void {
    this.users$ = this.usersService.getAllUsers();
  }

  isNewTrigger(): void {
    this.isNew = !this.isNew;
  }

  onSubmit(user: IUser) {
    const { email, name, password } = user;
    this.usersService.createUser(name, email, password).subscribe(user => {
      if (user) {
        this.isNewTrigger();
        this.router.navigate(['/users', user.id]);
      }
    })
  }
}
