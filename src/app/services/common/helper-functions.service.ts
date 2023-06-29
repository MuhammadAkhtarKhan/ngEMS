import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: "root"
})
export class HelperFunctionsServiceService {

  constructor() { }

  getBackendDateFormatFromNgbDatePicker({ day, month, year }) {
    return year + "-" + month + "-" + day;
  }
  getBackEndDateFromat(date) {
    return {
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear()
    };
  }
  getNgbDatePickerFormatFromBackendFormat(dateString) {

    var date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear()
    };

  }
  getNgbDatePickerFormatFromBackendFormatIfNull(dateString) {
    var date = new Date(dateString);
    if (dateString != '') {
      return {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear()
      };
    } else {
      return null;
    }
  }

  checkSpaceInString(value): boolean {
    if (value && !value.trim()) {
      return true
    } else {
      return false
    }
  }

  noWhitespaceValidator(c: FormControl) {
    const isWhitespace = c.value && !c.value.trim();
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }

  isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  getKeyValues = (lstMappingFromLeadCapture: Array<any> = [], dwhData: Array<any> = [], _form?: FormGroup) => {
    let object = [], keys = Object.keys(dwhData), key_Values = Object.entries(dwhData), isDataFromWarehouse: boolean = keys.length != 0 ? true : false;
    console.log(lstMappingFromLeadCapture)
    lstMappingFromLeadCapture.forEach(e => {
      let req = {};
      req = {
        name: e['key'],
        value: isDataFromWarehouse ? this.objectKeyValuesDWH(e, key_Values) : (_form && _form.controls[e['key']] ? _form.controls[e['key']].value : ''),
        customerRelationShipStageId: e.customerRelationShipStageId,
        customerRelationStageKey: e.customerRelationStageKey
      }
      object.push(req)
    });
    return object;
  }
  objectKeyValuesDWH = (_value, key_Values) => {
    for (var i in key_Values) {
      if (_value.customerRelationStageDWHKey == key_Values[i][0] || _value.key.toLowerCase().replace('_','')  == key_Values[i][0].toLowerCase().replace('_','')) {
        return key_Values[i][1];
      }
    }
    return "";
  }

  breakBranchConcatination = (lstBranch: Array<any> = [], _form: FormGroup): any => {
    let branch = {};
    lstBranch.forEach(e => {
      if (_form.value.branchId == e['branchId']) {
        branch = e;
      }
    });

    if (Object.keys(branch).length != 0) {
      _form.addControl('branchCode', new FormControl(branch['branchCode']));
      _form.addControl('branchName', new FormControl(branch['branchName']));
      return _form;
    }
    else {
      return _form;
    }
  }

  convertDateToYearMonthAndDay(date): string {
    let month;
    let day;
    // format for month
    if (date.month.toString().length < 2) {
      month = '0' + date.month;
    } else {
      month = date.month;
    }
    if (date.month.toString().length < 2) {
      month = '0' + date.month;
    } else {
      month = date.month;
    }
    //format for day
    if (date.day.toString().length < 2) {
      day = '0' + date.day;
    } else {
      day = date.day;
    }
    let createDate = date.year + '-' + month + '-' + day
    return createDate;

  }

  removeEmptyKeysFromObject(obj) {
    for (var propName in obj) {
      if (obj[propName] === null || obj[propName] === undefined || obj[propName] === '') {
        delete obj[propName];
      }
    }
    return obj
  }
}
