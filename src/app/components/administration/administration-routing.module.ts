import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageclassComponent } from './components/manageclass/manageclass.component';
import { AddEditClassComponent } from './components/manageclass/add-edit-class.component';
import { ManagecastComponent } from './components/managecast/managecast.component';

const routes: Routes = [
  {path:'class',component:ManageclassComponent},
  {path:'cast',component:ManagecastComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
