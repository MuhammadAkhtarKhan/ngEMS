import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgbCollapseModule,
    LayoutRoutingModule,

  ],
  exports:[LayoutComponent]
})
export class AppLayoutModule { }
