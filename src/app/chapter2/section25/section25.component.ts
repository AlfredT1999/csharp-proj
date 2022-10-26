import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section25',
  templateUrl: './section25.component.html',
  styleUrls: ['./section25.component.scss']
})
export class Section25Component implements OnInit {
  squareBraketOpen = '{';
  squareBraketClose = '}';

  constructor() { }

  ngOnInit(): void {
  }

}
