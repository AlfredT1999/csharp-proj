import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chapter2Component } from './chapter2/chapter2.component';
import { Section1Component } from './chapter2/section1/section1.component';
import { Section10Component } from './chapter2/section10/section10.component';
import { Section2Component } from './chapter2/section2/section2.component';
import { Section3Component } from './chapter2/section3/section3.component';
import { Section4Component } from './chapter2/section4/section4.component';
import { Section5Component } from './chapter2/section5/section5.component';
import { Section6Component } from './chapter2/section6/section6.component';
import { Section7Component } from './chapter2/section7/section7.component';
import { Section8Component } from './chapter2/section8/section8.component';
import { Section9Component } from './chapter2/section9/section9.component';

const routes: Routes = [
  {
    path: '',
    component: Chapter2Component
  },
  {
    path: 'section1',
    component: Section1Component
  },
  {
    path: 'section2',
    component: Section2Component
  },
  {
    path: 'section3',
    component: Section3Component
  },
  {
    path: 'section4',
    component: Section4Component
  },
  {
    path: 'section5',
    component: Section5Component
  },
  {
    path: 'section6',
    component: Section6Component
  },
  {
    path: 'section7',
    component: Section7Component
  },
  {
    path: 'section8',
    component: Section8Component
  },
  {
    path: 'section9',
    component: Section9Component
  },
  {
    path: 'section10',
    component: Section10Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
