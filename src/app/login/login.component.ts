import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userName:string=""
  password:string=""
  /**
   *
   */
  constructor(private router: Router) {
   console.log(router.url)

  }
  onClickLogin(){
    console.log('userName ' +this.userName)
    console.log('password ' +this.password)
  }

}
