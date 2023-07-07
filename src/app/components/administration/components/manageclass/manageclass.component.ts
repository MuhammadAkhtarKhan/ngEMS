import { Component } from '@angular/core';
import { Class } from './class.model';
import { TableHeaderMain } from '@app/generic/generic.model';
import { PaginationModel } from '@app/models/common/pagination.model';
import { Router } from '@angular/router';
import { SidePopupService } from '@app/shared/popups/side-popup/side-popup.service';
import { AddEditClassComponent } from './add-edit-class.component';
import { Contstants } from '@app/helper/constants';
import { skipLast } from 'rxjs/internal/operators/skipLast';
export type ButtonType = 'button' | 'submit';
@Component({
  selector: 'app-manageclass',
  templateUrl: './manageclass.component.html',
  styleUrls: ['./manageclass.component.scss'],
})
export class ManageclassComponent {
  type:ButtonType;
  lstClasses: Class[] = [];
  header: TableHeaderMain;
  pagination: PaginationModel;

  constructor(
    private router:Router,
    private popupservice: SidePopupService
    ) {
    this.type='button'
  }
  ngOnInit() {
    this.pagination=new PaginationModel(
      10,30
    )
    this.pagination.activePageNumber=1

    this.header = {
      tableWidth: '100%',
      actionWidth: '5%',
      showActionField: true,
      showActionFieldOnLeft: false,
      header: [
        {
          headerName: 'Id',
          fieldName: 'id',
          fieldWidth: '4%',
          searchByField: 'id',
          isSearchAble: true,
          searchType: { text: true, dropdown: false, date: false },
        },
        {
          headerName: 'class Name',
          fieldName: 'className',
          fieldWidth: '10%',
          searchByField: 'className',
          isSearchAble: true,
          searchType: { text: true, dropdown: false, date: false },
        },
        {
          headerName: 'class Abreviation',
          fieldName: 'classAbreviation',
          fieldWidth: '10%',
          searchByField: 'classAbreviation',
          isSearchAble: true,
          searchType: { text: true, dropdown: false, date: false },
        },
        {
          headerName: 'Created Date',
          fieldName: 'createdDate',
          fieldWidth: '10%',
          searchByField: 'createdDate',
          isSearchAble: true,
          searchType: { text: false, dropdown: false, date: true },
        },
        {
          headerName: 'Modified Date',
          fieldName: 'modifiedDate',
          fieldWidth: '10%',
          searchByField: 'modifiedDate',
          isSearchAble: true,
          searchType: { text: true, dropdown: false, date: false },
        },
      ],
    };
    this.lstClasses = [
      {
        id: 1,
        className: 'Play',
        classAbreviation: 'Pl',
        createdDate: '01-02-2022',
        modifiedDate: '05-06-2023',
      },
      {
        id: 2,
        className: 'Nursery',
        classAbreviation: 'Nurs',
        createdDate: '01-02-2022',
        modifiedDate: '05-06-2023',
      },
      {
        id: 3,
        className: 'Prep',
        classAbreviation: 'Prp',
        createdDate: '01-02-2022',
        modifiedDate: '05-06-2023',
      },
      {
        id: 4,
        className: 'Play',
        classAbreviation: 'Pl',
        createdDate: '01-02-2022',
        modifiedDate: '05-06-2023',
      },
      {
        id: 5,
        className: 'Nursery',
        classAbreviation: 'Nurs',
        createdDate: '01-02-2022',
        modifiedDate: '05-06-2023',
      },
      {
        id: 6,
        className: 'Prep',
        classAbreviation: 'Prp',
        createdDate: '01-02-2022',
        modifiedDate: '05-06-2023',
      },
      {
        id: 7,
        className: 'Play',
        classAbreviation: 'Pl',
        createdDate: '01-02-2022',
        modifiedDate: '05-06-2023',
      },
      {
        id: 8,
        className: 'Nursery',
        classAbreviation: 'Nurs',
        createdDate: '01-02-2022',
        modifiedDate: '05-06-2023',
      },
      {
        id: 9,
        className: 'Prep',
        classAbreviation: 'Prp',
        createdDate: '01-02-2022',
        modifiedDate: '05-06-2023',
      },
    ];
  }
  edit(event:Class){
    event.isEdit=true;
    this.popupservice.updateParams(event);
    Contstants.popupHeader='Update Class';
this.popupservice.updateComponent(AddEditClassComponent);
this.popupservice.close.pipe(skipLast(1)).subscribe(val=>{
  this.ngOnInit();
})
    console.log(event)
  }
  search(event){
    console.log(event)
  }
  onPageChange(event){
    console.log(event)
  }
  searchedText(event){
    console.log(event)
  }
  onRefreshPage(event){
    console.log(event)
  }
  onCreateNew(){
   let event={};
    event['isEdit']=true;
    this.popupservice.updateParams(event);
    Contstants.popupHeader='Add Class';
this.popupservice.updateComponent(AddEditClassComponent);
this.popupservice.close.pipe(skipLast(1)).subscribe(val=>{
  this.ngOnInit();

  })
}

}
