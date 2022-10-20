import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section18',
  templateUrl: './section18.component.html',
  styleUrls: ['./section18.component.scss']
})
export class Section18Component implements OnInit {
  squareBraketOpen = '{';
  squareBraketClose = '}';

  constructor() { }

  ngOnInit(): void {
  }

}
