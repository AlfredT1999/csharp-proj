import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section17',
  templateUrl: './section17.component.html',
  styleUrls: ['./section17.component.scss']
})
export class Section17Component implements OnInit {
  squareBraketOpen = '{';
  squareBraketClose = '}';

  constructor() { }

  ngOnInit(): void {
  }

}
