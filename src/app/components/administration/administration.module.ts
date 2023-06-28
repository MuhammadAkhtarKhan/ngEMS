import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

import { AdministrationRoutingModule } from './administration-routing.module';
import { ManageclassComponent } from './components/manageclass/manageclass.component';
import { AddEditClassComponent } from './components/manageclass/add-edit-class.component';



@NgModule({
  declarations: [
   ManageclassComponent, AddEditClassComponent

  ],
  imports: [
    CommonModule,
    MatIconModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
