import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chapter2Component } from './chapter2/chapter2.component';
import { Section1Component } from './chapter2/section1/section1.component';
import { Section2Component } from './chapter2/section2/section2.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
