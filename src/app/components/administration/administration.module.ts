import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

import { AdministrationRoutingModule } from './administration-routing.module';
import { ManageclassComponent } from './components/manageclass/manageclass.component';
import { AddEditClassComponent } from './components/manageclass/add-edit-class.component';
import { GenericModule } from '@app/generic/generic.module';

import { MyButtonsModule } from '@app/shared/buttons';
import { ReactiveFormsModule } from '@angular/forms';
import { SidePopupModule } from '@app/shared';
import {InputModule} from '@app/shared/controls/input';
import { ManagecastComponent } from './components/managecast/managecast.component';
import { AddEditCastComponent } from './components/managecast/add-edit-cast.component'



@NgModule({
  declarations: [
   ManageclassComponent, AddEditClassComponent, ManagecastComponent, AddEditCastComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    GenericModule,
    MyButtonsModule,
    SidePopupModule,
    InputModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
