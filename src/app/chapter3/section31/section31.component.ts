import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section31',
  templateUrl: './section31.component.html',
  styleUrls: ['./section31.component.scss']
})
export class Section31Component implements OnInit {
  squareBraketOpen = '{';
  squareBraketClose = '}';
  
  constructor() { }

  ngOnInit(): void {
  }

}
