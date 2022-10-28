import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chapter2Component } from './chapter2/chapter2.component';
import { Section1Component } from './chapter2/section1/section1.component';
import { Section10Component } from './chapter2/section10/section10.component';
import { Section11Component } from './chapter2/section11/section11.component';
import { Section12Component } from './chapter2/section12/section12.component';
import { Section13Component } from './chapter2/section13/section13.component';
import { Section14Component } from './chapter2/section14/section14.component';
import { Section15Component } from './chapter2/section15/section15.component';
import { Section16Component } from './chapter2/section16/section16.component';
import { Section17Component } from './chapter2/section17/section17.component';
import { Section18Component } from './chapter2/section18/section18.component';
import { Section19Component } from './chapter2/section19/section19.component';
import { Section2Component } from './chapter2/section2/section2.component';
import { Section20Component } from './chapter2/section20/section20.component';
import { Section21Component } from './chapter2/section21/section21.component';
import { Section22Component } from './chapter2/section22/section22.component';
import { Section23Component } from './chapter2/section23/section23.component';
import { Section24Component } from './chapter2/section24/section24.component';
import { Section25Component } from './chapter2/section25/section25.component';
import { Section26Component } from './chapter2/section26/section26.component';
import { Section27Component } from './chapter2/section27/section27.component';
import { Section28Component } from './chapter2/section28/section28.component';
import { Section3Component } from './chapter2/section3/section3.component';
import { Section4Component } from './chapter2/section4/section4.component';
import { Section5Component } from './chapter2/section5/section5.component';
import { Section6Component } from './chapter2/section6/section6.component';
import { Section7Component } from './chapter2/section7/section7.component';
import { Section8Component } from './chapter2/section8/section8.component';
import { Section9Component } from './chapter2/section9/section9.component';
import { ProfileComponent } from './profile/profile.component';

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
  },
  {
    path: 'section11',
    component: Section11Component
  },
  {
    path: 'section12',
    component: Section12Component
  },
  {
    path: 'section13',
    component: Section13Component
  },
  {
    path: 'section14',
    component: Section14Component
  },
  {
    path: 'section15',
    component: Section15Component
  },
  {
    path: 'section16',
    component: Section16Component
  },
  {
    path: 'section17',
    component: Section17Component
  },
  {
    path: 'section18',
    component: Section18Component
  },
  {
    path: 'section19',
    component: Section19Component
  },
  {
    path: 'section20',
    component: Section20Component
  },
  {
    path: 'section21',
    component: Section21Component
  },
  {
    path: 'section22',
    component: Section22Component
  },
  {
    path: 'section23',
    component: Section23Component
  },
  {
    path: 'section24',
    component: Section24Component
  },
  {
    path: 'section25',
    component: Section25Component
  },
  {
    path: 'section26',
    component: Section26Component
  },
  {
    path: 'section27',
    component: Section27Component
  },
  {
    path: 'section28',
    component: Section28Component
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
