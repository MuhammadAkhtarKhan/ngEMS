import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmsTableComponent } from './ems-table/ems-table.component';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatIconModule } from '@angular/material/icon';
import { EmsPaginationComponent } from './ems-pagination/ems-pagination.component';



@NgModule({
  declarations: [
    EmsTableComponent,
    EmsPaginationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    NgbDatepickerModule,
    MatIconModule,
  ],
  exports:[
    EmsTableComponent
  ]
})
export class GenericModule { }
