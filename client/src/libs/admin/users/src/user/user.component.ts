import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/IUser';
import { ApiUsersService } from 'src/libs/api';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  imgMock = 'https://100k-faces.glitch.me/random-image';
  user$!: Observable<IUser>;
  isChange = false;

  constructor(
    private readonly usersService: ApiUsersService,
    private readonly route: ActivatedRoute,
    private readonly cdr: ChangeDetectorRef,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      if (id) this.user$ = this.usersService.getUserById(id);
      this.cdr.detectChanges();
    })
  }

  change() {
    this.isChange = !this.isChange;
  }

  delete(id: Guid) {
    this.usersService.deleteUser(id).subscribe(() => {
      this.router.navigate(['/users']);
    });
  }

  onSubmit(user: IUser) {
    return;
  }
}
