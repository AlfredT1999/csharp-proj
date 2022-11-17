import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section30',
  templateUrl: './section30.component.html',
  styleUrls: ['./section30.component.scss']
})
export class Section30Component implements OnInit {
  squareBraketOpen = '{';
  squareBraketClose = '}';
  
  constructor() { }

  ngOnInit(): void {
  }

}
