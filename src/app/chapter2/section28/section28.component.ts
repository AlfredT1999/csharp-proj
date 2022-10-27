import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section28',
  templateUrl: './section28.component.html',
  styleUrls: ['./section28.component.scss']
})
export class Section28Component implements OnInit {
  squareBraketOpen = '{';
  squareBraketClose = '}';
  
  constructor() { }

  ngOnInit(): void {
  }

}
