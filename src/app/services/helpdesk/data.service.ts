import { Injectable } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { isArray } from 'util';
import * as XLSX from 'xlsx';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import { DatePipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  modalOptions: NgbModalOptions = {};
  modalReference: NgbModalRef;
  closeResult: string;

  constructor(private modalService: NgbModal,private datePipe: DatePipe) { }

  downloadExcel(excelData, excelName: String, objKeys = [], type?: any) {
    var dwnldExcelData = excelData;
    if (objKeys.length == 2) {
      if (isArray(objKeys[0]) && isArray(objKeys[1])) {
        dwnldExcelData = this.convertDatas(excelData, objKeys, type);
      }
    }
    dwnldExcelData.forEach(function (item) {
      delete item.Action;
    });

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dwnldExcelData);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, excelName + '.xlsx');

    return 'success';
  }
  convertDatas(excelData: Array<{}>, objKeys = [], type?: any) {
    let excelArray = [];
    let excelHeaders = objKeys[0];

    let excelKeys = objKeys[1];
    for (let index = 0; index < excelData.length; index++) {
      const element = excelData[index];
      var objKey = {
        'S.NO': (index + 1)
      };
      for (let idx = 0; idx < excelKeys.length; idx++) {

        const innerElement = excelKeys[idx];
        if (innerElement.data == "active") {
          objKey[excelHeaders[idx]] = element[innerElement.data] ? "Active" : "Inactive";
        } else if (innerElement.data == "status") {
          objKey[excelHeaders[idx]] = element[innerElement.data] ? "Active" : "Inactive";
        }
        else if (innerElement.data == "isActive") {
          objKey[excelHeaders[idx]] = element[innerElement.data] ? "Active" : "Inactive";
        }
        else if (innerElement.data == "createdDate") {
          objKey[excelHeaders[idx]] = element[innerElement.data] ? this.datePipe.transform(element[innerElement.data], 'yyyy-MM-dd HH:mm:ss') : "-";
        }
        else if (innerElement.data == "modifiedDate" && element[innerElement.data] != "-") {
          objKey[excelHeaders[idx]] = element[innerElement.data] ? this.datePipe.transform(element[innerElement.data], 'yyyy-MM-dd HH:mm:ss') : "-";
        }
        else {
          objKey[excelHeaders[idx]] = element[innerElement.data];
        }

      }
      excelArray.push(objKey);
    }
    return excelArray;
  }
  openDialogModal(content) {
    this.modalOptions.backdrop = 'static';
    this.modalOptions.keyboard = true;
    this.modalOptions.centered = true;
    this.modalReference = this.modalService.open(content, this.modalOptions);
    this.modalReference.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  closeDialogModal() {
    this.modalReference.close();
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  downloadExcelWithHeader(header1, excelData, TITLEDate,reportGenerateBased, Category) {

    const header = header1
    const data = excelData
    const ImagePath = '../assets/images/logo-d-dark.png'
    const title = Category;
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet(title);
    const imageId = workbook.addImage({
      base64:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATIAAABICAYAAAB1CHnWAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAAFiUAABYlAUlSJPAAABnfSURBVHhe7Z0LlE3VH8e3fw+9X0pPFc30UPQk7kRF0QwxqRC1SJpplZVplUqLVaRCat3pyaiVSg/0IMyEHohboZJXZYaiPJJKVCg6//35uWfmnHPPvXPvnRnmmv1Z63Dn3n323vc8vvf3++3f3qeWpVEGg8GQwvwv/L/BYDCkLEbIDAZDymOEzGAwpDxGyAwGQ8pjhMxgMKQ8RsgMBkPKY4TMYDCkPEbIDAZDymOEzGAwpDxGyAwGQ8qzW6cobd68WX377bdq5cqV6tdff1X//vuv2n///WX73/92aep///2n/vnnH9n2228/VadOHdWgQQN15plnqsMOO0zKGAwGg5MqFzKqnzdvnvriiy9EuI477jh1zjnnqJNPPlkdeuih4VL+bNmyRf34449qyZIlat26dWrfffdVF154obr44otVrVq1wqUMBkNNp0qF7MMPP1QLFixQdevWVa1btxbx2r59u1q7dq1YZBs3blRbt25VO3fuLBUmurPPPvuoAw44QB188MHq6KOPVqeddpqqXbu2iBp1/vzzz+qiiy6SOg0Gg6FKhGzp0qVq4sSJqn79+uqaa65RBx54oPr666/Vd999JyK1evVqEbfrr79e3MporFmzRv3www9q/fr1InZnnHGGOvfcc0X8qB8XtWPHjmLhGQyGmkulChnxrddff11t2LBBde/eXR177LHqk08+EUE66aSTVJMmTcSyQoTGjh2rjj/+eHXqqafK/6tWrRK3E7GaO3euvEYEDznkEKn7r7/+UgsXLhSr7MQTT1QtWrSQdqgHUezWrVtpnM1gMNQsKk3IfvvtN1VQUKAaNmyoOnToIEF93EqECQGDzz//XE2fPl0ECLdx5syZ6rzzzlO33367ev755yXAT3mErlGjRmrQoEEiaIBlhujB/PnzxbojXnbWWWepyZMnixWYk5OjjjrqKCljMBhqDpViwmBx5efnq6uvvlpEDGEpLi5W1157rbrgggvUO++8o2655RbVqVMndfjhh6u8vDyxwBC4QCAgQfySkhIRvrZt24oY3XnnnaUiBh999JG66qqr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',
      extension: 'png'
    });
    worksheet.addRow([]);
    worksheet.mergeCells('A1:' + 'X2')
    worksheet.addImage(imageId, 'A1:' + 'B2');


    worksheet.mergeCells('A3:' + 'X3')
    worksheet.getCell('A3').value = TITLEDate
    worksheet.getCell('A3').font = { size: 11, bold: false, }
    worksheet.getCell('A3').font = { color: {argb: 'FFFFFF'}}
    worksheet.getCell('A3').fill = {  type: "pattern",
    pattern: "solid",  fgColor: { argb: "2563EB" }, }

    worksheet.mergeCells('A4:' + 'X4')
    worksheet.getCell('A4').value = 'Report Generated By : '+ localStorage.getItem('userName').toUpperCase()
    worksheet.getCell('A4').font = { size: 11, bold: false }


    let subTitleRow: any = 'Report Generated Date : ' + moment(new Date()).format("DD-MMM-YYYY hh:mm:ss")
    worksheet.mergeCells('A5:' + 'X5')
    worksheet.getCell('A5').value = subTitleRow
    worksheet.getCell('A5').font = { size: 11, bold: false }


    worksheet.mergeCells('A6:' + 'X6')
    worksheet.getCell('A6').value = reportGenerateBased
    worksheet.getCell('A6').font = { size: 11, bold: false }

    worksheet.addRow([]);
    worksheet.addRow(header)
  
    let columnsArray: any[];
    for (const key in excelData) {
      if (excelData.hasOwnProperty(key)) {
        columnsArray = Object.keys(excelData[key]);
      }
    }
    data.forEach(d => {
      const eachRow = [];
      columnsArray.forEach((column) => {
        eachRow.push(d[column])
      })
      const row = worksheet.addRow(eachRow);

    })
   
    workbook.xlsx.writeBuffer().then((data: any) => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, title + ' Report.xlsx');
    });
    return 'success';
  }


}
