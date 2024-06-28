import { Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
// import { merge, Observable, of as observableOf } from 'rxjs';
// import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';

const dutchRangeLabel = (page: number, pageSize: number, length: number) => {
  if (length === 0 || pageSize === 0) { return `0 of ${length}`; }

  length = Math.max(length, 0);

  const startIndex = page * pageSize;

  // If the start index exceeds the list length, do not try and fix the end index to the end.
  const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;

  return `Showing ${startIndex + 1} to ${endIndex} of ${length} entries`;
};

@Component({
  selector: 'app-mat-normal-table',
  templateUrl: './mat-normal-table.component.html',
  styleUrls: ['./mat-normal-table.component.css'],
})
export class MatNormalTableComponent
  implements AfterViewInit, OnInit, OnChanges {
  @Input() pageSize = 10;
  @Input() totalCount = 10;
  @Input() columns: [];
  @Input() dataSource = new MatTableDataSource();
  @Input() actionKeys: string[] = [];
  @Input() actionBtnBasedOnCond: any = {};
  @Input() actionKeysShowBasedOnCond: string[] = [];
  @Input() isSearchRes = false;
  @Input() isLoadingResults:boolean;

  @Output() editAction = new EventEmitter<any>();
  @Output() viewAction = new EventEmitter<any>();
  @Output() deleteAction = new EventEmitter<any>();
  @Output() downloadAction = new EventEmitter<any>();
  @Output() paginationEvent = new EventEmitter<any>();
  @Output() checkboxAction = new EventEmitter<any>();

  public displayedColumns: string[] = [];
  public resultsLength = 0;
  public showEditButton = true;
  public currentPage = 0;
  public pageSizeOptions = [5, 10, 25, 100];
  public array: any;
  public optionVal = ['Active', 'In-Active'];
  public defDateFormat = 'dd/MM/yyyy';

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor() {}

  ngOnInit(): void {
    // console.log('adv-mat-dynamic', this.pageSize);
    // console.log('adv-mat-dynamic::columns', this.columns);
    // console.log('adv-mat-dynamic::totalCount', this.totalCount);

    this.columns.forEach((ele: any, val) => {
      this.displayedColumns.push(ele.name);
    });

    if (this.actionKeys.length > 0) {
      this.displayedColumns.push('actions');
    }

    // console.log('adv-mat-dynamic::dataSource', this.dataSource);
    // console.log('adv-mat-dynamic::currentPage', this.currentPage);

    // this.isLoadingResults = false;
    this.resultsLength = this.totalCount;
  }

  ngAfterViewInit() {
    this.paginator.showFirstLastButtons = true;
    this.paginator._intl.itemsPerPageLabel = 'Show';
    this.paginator._intl.getRangeLabel = dutchRangeLabel;

    this.dataSource.sort = this.sort;
    this.resultsLength = this.totalCount;
    // console.log('this.resultsLength::', this.resultsLength);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe((res) => {
      // console.log('res::', res);
      this.paginator.pageIndex = 0;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    // const currentItem: SimpleChange = changes.isSearchRes;
    // console.log('prev value: ', currentItem.previousValue);
    // console.log('got item: ', currentItem.currentValue);

    // console.log('changes::', changes.isSearchRes);

    // console.log('this.isSearchRes::', this.isSearchRes);
    if (changes.isSearchRes) {
      this.currentPage = 0;
    }
  }

  handlePagination(e: any) {
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;

    // console.log('this.currentPage::', this.currentPage);
    // console.log('this.pageSize::', this.pageSize);

    const end = (this.currentPage + 1) * this.pageSize;
    const start = this.currentPage * this.pageSize;
    // console.log('end::', end);
    // console.log('start::', start);
    // const part = this.array.slice(start, end);

    // console.log('part::', part);
    const paginationObj = {
      isSearchRes: this.isSearchRes,
      currentPage: this.currentPage,
      pageSize: this.pageSize,
      start,
      end,
    };

    // console.log( 'child-handlePagination', paginationObj );
    this.paginationEvent.emit(paginationObj);
  }

  onEditClicked(id, event) {
    console.log('onEditClicked clicked: ', event);
    this.editAction.emit({ event, id });
  }

  onViewClicked(id, event) {
    console.log('onViewClicked clicked: ', event);
    this.viewAction.emit({ event, id });
  }

  onDeleteClicked(id, event) {
    console.log('onDeleteClicked clicked: ', event);
    this.deleteAction.emit({ event, id });
  }

  onDownloadClicked(id, event) {
    console.log('onDownloadClicked clicked: ', event);
    this.downloadAction.emit({ event, id });
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }

  onCheckboxChecked(id, event) {
    console.log('onCheckboxClicked clicked: ', event);
    this.checkboxAction.emit({ event, id });
  }

  hasDownloadKey() {
    return this.actionKeys.includes('download') ? true : false;
  }

  checkEditButton(eleVal) {
    if (this.actionBtnBasedOnCond.edit.condition) {
      return (this.actionBtnBasedOnCond.edit.condition === eleVal);
    }
    if (this.actionBtnBasedOnCond.edit.conditionIn) {
      return this.actionBtnBasedOnCond.edit.conditionIn.includes(eleVal);
    }
    return false;
  }
}
