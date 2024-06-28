import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';
// import * as XLSX from 'xlsx';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import * as _ from 'lodash';

import {
  WorkSheet as XLSXWorksheet,
  WorkBook as XLSXWorkBook,
  utils as XLSXUtils,
  writeFile as XLSXWriteFile
} from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  test = 'name';
  constructor(
    private datepipe: DatePipe,
  ) { }

  dateTransform(date, format) {
    return this.datepipe.transform(date, format);
  }

  getDate() {
    return moment().format('LLLL');
  }

  sumArr(arr) {
    return _.sum(arr);
  }

  createPDF(filename, data) {
    console.log('data => ');
    console.log(data);
    pdfMake.createPdf( data ).download( filename );
    return true;
  }

  createXLSX(filename, element) {

    const ws: XLSXWorksheet = XLSXUtils.table_to_sheet(element);
    /* generate workbook and add the worksheet */
    const wb: XLSXWorkBook = XLSXUtils.book_new();
    XLSXUtils.book_append_sheet(wb, ws, 'Sheet1');
    /* save to file */
    XLSXWriteFile(wb, filename);
    return true;

  }
}
