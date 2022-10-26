import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section24',
  templateUrl: './section24.component.html',
  styleUrls: ['./section24.component.scss']
})
export class Section24Component implements OnInit {
  squareBraketOpen = '{';
  squareBraketClose = '}';
  
  constructor() { }

  ngOnInit(): void {
  }

}
