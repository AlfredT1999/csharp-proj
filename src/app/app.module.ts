import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Chapter2Component } from './chapter2/chapter2.component';
import { Section1Component } from './chapter2/section1/section1.component';
import { Section2Component } from './chapter2/section2/section2.component';
import { Section3Component } from './chapter2/section3/section3.component';
import { Section4Component } from './chapter2/section4/section4.component';
import { Section5Component } from './chapter2/section5/section5.component';
import { Section6Component } from './chapter2/section6/section6.component';
import { Section7Component } from './chapter2/section7/section7.component';
import { Section8Component } from './chapter2/section8/section8.component';
import { Section9Component } from './chapter2/section9/section9.component';
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
import { AceComponent } from './ace/ace.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    Chapter2Component,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component,
    Section7Component,
    Section8Component,
    Section9Component,
    Section10Component,
    Section11Component,
    Section12Component,
    Section13Component,
    Section14Component,
    Section15Component,
    Section16Component,
    Section17Component,
    Section18Component,
    Section19Component,
    AceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
