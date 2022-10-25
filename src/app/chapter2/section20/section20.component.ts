import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section20',
  templateUrl: './section20.component.html',
  styleUrls: ['./section20.component.scss']
})
export class Section20Component implements OnInit {
  squareBraketOpen = '{';
  squareBraketClose = '}';

  constructor() { }

  ngOnInit(): void {
  }

}
