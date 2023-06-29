import { Component } from '@angular/core';
import { Class } from './class.model';
import { TableHeaderMain } from '@app/generic/generic.model';

@Component({
  selector: 'app-manageclass',
  templateUrl: './manageclass.component.html',
  styleUrls: ['./manageclass.component.scss'],
})
export class ManageclassComponent {
  lstClasses: Class[] = [];
  header: TableHeaderMain;
  constructor() {}
  ngOnInit() {
    this.header = {
      tableWidth: '100%',
      actionWidth: '2%',
      showActionField: true,
      showActionFieldOnLeft: true,
      header: [
        {
          headerName: 'Id',
          fieldName: 'id',
          fieldWidth: '2%',
          searchByField: 'id',
          isSearchAble: true,
          searchType: { text: true, dropdown: false, date: false },
        },
        {
          headerName: 'className',
          fieldName: 'className',
          fieldWidth: '10%',
          searchByField: 'className',
          isSearchAble: true,
          searchType: { text: true, dropdown: false, date: false },
        },
        {
          headerName: 'classAbreviation',
          fieldName: 'classAbreviation',
          fieldWidth: '10%',
          searchByField: 'classAbreviation',
          isSearchAble: true,
          searchType: { text: true, dropdown: false, date: false },
        },
        {
          headerName: 'createdDate',
          fieldName: 'createdDate',
          fieldWidth: '10%',
          searchByField: 'createdDate',
          isSearchAble: true,
          searchType: { text: false, dropdown: false, date: true },
        },
        {
          headerName: 'modifiedDate',
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
  edit(event){
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

}
