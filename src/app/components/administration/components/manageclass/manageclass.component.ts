import { Component } from '@angular/core';
import { Class } from './class.model';

@Component({
  selector: 'app-manageclass',
  templateUrl: './manageclass.component.html',
  styleUrls: ['./manageclass.component.scss']
})
export class ManageclassComponent {
  lstClasses:Class[]=[];
  ngOnInit(){
    this.lstClasses=[
      {id:1, className:'Play', classAbreviation:'Pl', createdDate:'01-02-2022', modifiedDate:'05-06-2023' },
      {id:2, className:'Nursery', classAbreviation:'Nurs' , createdDate:'01-02-2022', modifiedDate:'05-06-2023' },
      {id:3, className:'Prep', classAbreviation:'Prp' , createdDate:'01-02-2022', modifiedDate:'05-06-2023' },
      {id:4, className:'Play', classAbreviation:'Pl', createdDate:'01-02-2022', modifiedDate:'05-06-2023' },
      {id:5, className:'Nursery', classAbreviation:'Nurs' , createdDate:'01-02-2022', modifiedDate:'05-06-2023' },
      {id:6, className:'Prep', classAbreviation:'Prp' , createdDate:'01-02-2022', modifiedDate:'05-06-2023' },
      {id:7, className:'Play', classAbreviation:'Pl', createdDate:'01-02-2022', modifiedDate:'05-06-2023' },
      {id:8, className:'Nursery', classAbreviation:'Nurs' , createdDate:'01-02-2022', modifiedDate:'05-06-2023' },
      {id:9, className:'Prep', classAbreviation:'Prp' , createdDate:'01-02-2022', modifiedDate:'05-06-2023' },
    ]
  }
}
