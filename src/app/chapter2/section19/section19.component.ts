import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section19',
  templateUrl: './section19.component.html',
  styleUrls: ['./section19.component.scss']
})
export class Section19Component implements OnInit {
  squareBraketOpen = '{';
  squareBraketClose = '}';

  constructor() { }

  ngOnInit(): void {
  }

}
