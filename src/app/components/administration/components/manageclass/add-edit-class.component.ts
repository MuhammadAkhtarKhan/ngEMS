import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonType } from './manageclass.component';
import { SidePopupService } from '@app/shared/popups/side-popup/side-popup.service';
import { Class } from './class.model';

@Component({
  selector: 'app-add-edit-class',
  templateUrl: './add-edit-class.component.html',
  styleUrls: ['./add-edit-class.component.scss']
})
export class AddEditClassComponent {
  type:ButtonType;
  showMsg:boolean;
  classFormGroup: FormGroup;
  formGroup=new FormGroup(
    ({  firstname:new FormControl('',[Validators.required]),
  lastname:new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.required, Validators.email])
})
  )
  constructor(
    private router: Router,
    private fb:FormBuilder,
    private popupService: SidePopupService
    ){
      this.type='button'
  }
  ngOnInit(){
let param=this.popupService.getParams() as Class;
if(param.isEdit){
  this.classFormGroup = this.fb.group({
    className: [param.className,[Validators.required]],
    classAbbreviation: [param.classAbreviation,[Validators.required]]
  });
}else{
  this.classFormGroup = this.fb.group({
    className: ['',[Validators.required]],
    classAbbreviation: ['',[Validators.required]]
  });

}

  }
  submitForm(){
    console.log(this.classFormGroup.value);
    this.router.navigateByUrl('/administration/class');

  }
}
