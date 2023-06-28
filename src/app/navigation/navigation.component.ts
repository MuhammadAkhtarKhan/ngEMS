import { Component, OnInit, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  panelOpenState = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  user: any;
  @Input() isShowing: boolean=true;

  constructor(
    private breakpointObserver: BreakpointObserver,
    // private authService: AuthService
     ) { }

  ngOnInit() {
    // this.user = this.authService.getUserDetail();
    // // Subscribe to listen changes of login status
    // this.authService.loginStatus.subscribe(
    //   status => {
    //     if (status)
    //       this.user = this.authService.getUserDetail();
    //     else
    //       this.user = null;
    //   }
    // );
    this.user={
      userName:'Akhtar Khan'
    }
  }

  logout() {
    // this.authService.logout();
    this.isShowing=false;
  }
  login(){
    debugger;
    this.isShowing=true;
  }

}



