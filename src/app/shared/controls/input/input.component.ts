import { Component, OnInit, Input } from '@angular/core';
import {FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'ems-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

@Input() inputId="";
@Input() control=new FormControl();
@Input() label="";
@Input() type='text';

errorMessages:Record<string, string>={
  required:'The field is required.',
  email:'The e-mail is required.',
}
constructor(){
}
  ngOnInit(): void {
this.control.valueChanges.subscribe(val=>{
  console.log(this.control)
})
  }

}
