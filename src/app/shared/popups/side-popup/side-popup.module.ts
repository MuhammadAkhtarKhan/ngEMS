import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidePopupComponent } from './side-popup.component';



@NgModule({
  declarations: [
    SidePopupComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[SidePopupComponent]
})
export class SidePopupModule { }
