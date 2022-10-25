import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section23',
  templateUrl: './section23.component.html',
  styleUrls: ['./section23.component.scss']
})
export class Section23Component implements OnInit {
  squareBraketOpen = '{';
  squareBraketClose = '}';
  
  constructor() { }

  ngOnInit(): void {
  }

}
