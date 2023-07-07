import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SidePopupService {
private component = new BehaviorSubject(null);
 close= new BehaviorSubject(null);
 result=new BehaviorSubject(null)
private params= new BehaviorSubject(null);
public parameters={};
public destroy= new Subject();
  constructor() { }

  updateComponent(component: any){
    this.component.next(component);
  }
  getComponent(){
    return this.component.asObservable();
  }
  closePopup(value?){
    if(value){
      this.close.next(value)
    }else{
      this.close.next(true);
    }
  }
  isClosed(){
    return this.close.asObservable();
  }
  updateResult(result:any){
    this.result.next(result);
  }
  getResultOnClose(){
    return this.result.asObservable();
  }
  updateParams(params:any){
    this.parameters=params;
  }
  getParams(){
    let params=this.parameters;
    this.parameters=null;
    return params;
  }
  modalSize:string=null; //lg, md, sm
  updateModalSize(size:string){
    this.modalSize=size;
  }
}
