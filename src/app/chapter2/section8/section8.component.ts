import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section8',
  templateUrl: './section8.component.html',
  styleUrls: ['./section8.component.scss']
})
export class Section8Component implements OnInit {
  consoleLog = 'Console.Write($"A square has {x} sides");';
  constructor() { }

  ngOnInit(): void {
  }

}
