import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section32',
  templateUrl: './section32.component.html',
  styleUrls: ['./section32.component.scss']
})
export class Section32Component implements OnInit {
  squareBraketOpen = '{';
  squareBraketClose = '}';
  
  constructor() { }

  ngOnInit(): void {
  }

}
