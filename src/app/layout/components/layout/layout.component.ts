import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-component',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isHomeGroupActive:boolean=true;
  isAdminGroupActive:boolean=true;
  isAdminCollapsed:boolean=true;
  isShowFullMenu:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }


  showFullMenu(){
    this.isShowFullMenu=true;
  }
  hideFullMenu(){
    this.isShowFullMenu=false;
  }



}
