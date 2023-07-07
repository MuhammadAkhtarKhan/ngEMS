import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TableHeaderMain } from '../generic.model';
import { HelperFunctionsServiceService } from '@app/services/common/helper-functions.service';
import { PaginationModel } from '@app/models/common/pagination.model';
import { AlertType } from '@app/models/common/alert.model';
import { NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ems-table',
  templateUrl: './ems-table.component.html',
  styleUrls: ['./ems-table.component.scss'],
  providers: [{provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}]
})
export class EmsTableComponent {

  @Input('canupdate') CAN_UPDATE = false;
  @Input('lstData') lstFilesUploaded: any[] = [];
  @Input('lstHeader') ObjHeader: TableHeaderMain;
  @Input('pagination') pagination: PaginationModel;
  @Output('editedObject') editedObjectEvent: EventEmitter<any | null> = new EventEmitter();
  @Output('searchedText') searchedTextEvent: EventEmitter<any | null> = new EventEmitter();
  @Output('onPageChange') onClickPageChangeEvent: EventEmitter<any | null> = new EventEmitter();
  @Output('refreshPage') refreshPage: EventEmitter<any | null> = new EventEmitter();


  searchText: any = {};

  activePageNo = 1;
  showSearchBar: boolean = false;
  obj = {};
  notification: any;

  _object = Object;
  eachFieldLength: number;
  fieldWidth: string;
  // totalFields: number=0;
  constructor(
    private helperFunc: HelperFunctionsServiceService,
    private sanitizer: DomSanitizer
  ) {

  }

  ngOnInit() {


  }


  filterMultipleColumn() {
  let request=this.searchTextFunc();
    this.searchedTextEvent.emit(request);

  }
  searchTextFunc():any{
    var request = {};
    let serch = Object.assign({}, this.searchText)
    serch = this.helperFunc.removeEmptyKeysFromObject(serch)

    this.obj = this.helperFunc.removeEmptyKeysFromObject(this.obj)
    for (const key in this.obj) {
      if (Object.prototype.hasOwnProperty.call(this.obj, key)) {
        const element = this.obj[key];
        let val;
        if (element.minValue || element.maxValue) {
          val = this.validateMinMax(element.minValue, element.maxValue, key);

          if (val != "") {
            this.notification.showNotification({
              type: AlertType.INFO,
              message: val
            });
            return;
          }
        }
      }
    }
    for (const key in this.obj) {
      if (Object.prototype.hasOwnProperty.call(this.obj, key)) {
        const element = this.obj[key];
        serch[key] = element;
      }
    }



    request["searchText"] = serch;
    return request;
  }
  validateMinMax(minValue: string, maxValue: string, key): string {
    let val = "";
    let min = Number(minValue);
    let max = Number(maxValue);
    if (minValue == "" || isNaN(min) == true) {
      val = "Please provide min value in " + key;
      return val;
    }
    if (maxValue == "" || isNaN(max) == true) {
      val = "Please provide max value in " + key;
      return val;
    }

    if (min > max) {
      //val=  key+" has "+minValue+ ">"+maxValue
      val = "Please provide max value greater than min value in " + key;
    }
    return val;
  }

  onPageChange(event) {
debugger
    this.pagination.activePageNumber = event;
    this.activePageNo = event;
    var request = {}
    request['pageNo'] = this.pagination.activePageNumber;
    request['isPageLoad'] = 0;
    //request['searchText']=this.searchTextFunc();
    let searchedText=this.searchTextFunc();
    if (!this.isValidData(searchedText['searchText'])) {
      request["searchText"] = searchedText['searchText'];
    } else {
      request["searchText"] = "";
    }
     this.onClickPageChangeEvent.emit(request);
  }
  isValidData(data: string): boolean {
    if (data == "0") return false;
    return (data == "" || data == undefined || data == null);
  }
  editRequest(event) {

    this.editedObjectEvent.emit(event);
  }
  resetPage() {
    this.searchText = {};
    var request = {}
    this.showSearchBar = false;

    request['pageNo'] = 1;
    request['isPageLoad'] = 1;
    request['searchText'] = "";
    // request['date'] = this.helperFunc.convertDateToYearMonthAndDay(this.helperFunc.getNgbDatePickerFormatFromBackendFormat(new Date()));
    // this.getManualRequestData(request);
    this.refreshPage.emit(request)

  }

}
