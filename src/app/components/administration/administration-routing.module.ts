import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageclassComponent } from './components/manageclass/manageclass.component';
import { AddEditClassComponent } from './components/manageclass/add-edit-class.component';

const routes: Routes = [
  {path:'class',component:ManageclassComponent},
  {path:'class/add',component:AddEditClassComponent},
  {path:'class/:id',component:AddEditClassComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
