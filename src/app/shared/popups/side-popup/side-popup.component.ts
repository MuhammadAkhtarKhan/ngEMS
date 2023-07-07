import { AfterViewInit, Component, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { SidePopupService } from './side-popup.service';

import { DomSanitizer } from '@angular/platform-browser';
import { Subject, skip, takeUntil } from 'rxjs';
import { Contstants } from '@app/helper/constants';

@Component({
  selector: 'app-side-popup',
  templateUrl: './side-popup.component.html',
  styleUrls: ['./side-popup.component.scss']
})
export class SidePopupComponent implements OnInit, AfterViewInit {
  @ViewChild('popupcontainer', {read:ViewContainerRef, static:true})
  container:ViewContainerRef;
  constructor(
    private popupService: SidePopupService,
   public sanitizer: DomSanitizer,
   private viewContainerRef: ViewContainerRef
  ){

  }

  visible:boolean=false;
  popupHeader="";
  width:string="";
  popupComponent:any;
  showDialog:boolean;
  components:Array<any>=[];
  removeTabKeyListener:Function;
  unsubscribe$: Subject<boolean>=new Subject();
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.popupService.isClosed().subscribe(()=>{
      this.close();
    });
    this.popupService.getComponent().pipe(skip(1), takeUntil(this.unsubscribe$))
    .subscribe(component=>{
      if(component){
        this.popupHeader=this.maxLengthTransform(Contstants.popupHeader);
        if(this.popupService.modalSize=="lg"){
        }else if(this.popupService.modalSize=="sm"){
          this.width="400px";
        }
        this.popupService.modalSize=null;
      }
      if(!this.showDialog || !this.visible){
        this.popupComponent=null;
        this.popupComponent=component;
        this.showDialog=true;
        this.visible=true;
        this.addComponent(this.popupComponent)
      }
    })
  }
addComponent(componentClass: Type<any>){
  try{
const component=this.container.createComponent(componentClass)
this.components.push(component)
  }catch(error){
    console.error(error);
    this.close();
  }
}
  close(){
    this.visible=false;
    this.popupService.result.next(false);
    this.removeComponent(this.popupComponent);
    this.popupComponent=null;
    this.showDialog=false;
    this.width="";
    this.popupHeader="";
    let myE1=document.querySelector('body')
    myE1.classList.remove("date-time");
  }
  removeComponent(componentClass:Type<any>){
const component=this.components.find(
  component=>component.instance instanceof componentClass
);
const componentIndex=this.components.indexOf(component);
if(componentIndex!==-1){
  this.container.remove(componentIndex);
  this.components.slice(componentIndex,1);
  this.onHide();
}
  }
  onHide(){
    this.removeTabKeyListener=null;
  }
  maxLengthTransform(value){
    if(value.length>100){
      value=value.slice(0,150);
      value=value.concat('...')
    }
    return value;
  }
  ngOnDestroy(){
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }


}
