import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  imgMock: string = 'https://100k-faces.glitch.me/random-image';
  constructor() { }

  ngOnInit(): void {
  }

}
