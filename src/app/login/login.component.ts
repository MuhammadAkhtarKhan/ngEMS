import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm:FormGroup;

  /**
   *
   */
  constructor(
    private router: Router,
    private fb:FormBuilder
    ) {
   console.log(router.url)
  this.loginForm= this.fb.group({
    userName:[null,[Validators.required,Validators.minLength(4)]],
    password:[null,[Validators.required]],
   })

  }
  // get username() { return this.loginForm.get('userName'); }
  // get password() { return this.loginForm.get('password'); }
  onClickLogin(){
    console.log(this.loginForm)

  }

}
