import { NgModule, ModuleWithProviders, SkipSelf } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertModule, BreadcrumbModule, CardModule, ModalModule } from './components';
import { DataFilterPipe } from './components/data-table/data-filter.pipe';
import { FilterPipe } from './components/data-table/filter.pipe';
import { InputRestrictionDirective } from './components/data-table/inputvalid.pipe';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ClickOutsideModule } from 'ng-click-outside';

import { SpinnerComponent } from './components/spinner/spinner.component';
import { ApexChartComponent } from './components/chart/apex-chart/apex-chart.component';
import { ApexChartService } from './components/chart/apex-chart/apex-chart.service';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { DataTablesModule } from 'angular-datatables';
import {
  NgbModule,
  NgbButtonsModule,
  NgbDropdownModule,
  NgbTabsetModule,
  NgbTooltipModule
} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MainMaterialModule } from '@app/_shared/material-module';
import { MatNormalTableComponent } from '@app/_shared/mat-normal-table/mat-normal-table.component';
import { RouterModule } from '@angular/router';
import { CommonBreadcrumbComponent } from '@app/_shared/common-breadcrumb/common-breadcrumb.component';
import { ShowErrorsComponent } from '@app/_shared/components/show-errors/show-errors.component';
import { SelectInputComponent } from '@app/_shared/components/select-input/select-input.component';
import { ArrayToStringPipe } from '@app/_shared/array-to-string.pipe';
import { TimeAgoPipe } from 'time-ago-pipe';


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    DataFilterPipe,
    FilterPipe, InputRestrictionDirective,
    SpinnerComponent,
    ApexChartComponent,
    MatNormalTableComponent,
    CommonBreadcrumbComponent,
    ShowErrorsComponent,
    SelectInputComponent,
    ArrayToStringPipe,
    TimeAgoPipe
  ],
  imports: [
    CommonModule,
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
    CardModule,
    BreadcrumbModule,
    ModalModule,
    ClickOutsideModule,
    NgxDaterangepickerMd.forRoot(),
    DataTablesModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbButtonsModule,
    NgbTabsetModule,
    NgbModule,
    TranslateModule,
    MainMaterialModule,
    RouterModule,
  ],
  exports: [
    DataFilterPipe,
    FilterPipe, InputRestrictionDirective,
    SpinnerComponent,
    ApexChartComponent,
    CommonModule,
    PerfectScrollbarModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
    CardModule,
    BreadcrumbModule,
    ModalModule,
    ClickOutsideModule,
    NgxDaterangepickerMd,
    DataTablesModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbButtonsModule,
    NgbTabsetModule,
    NgbModule,
    TranslateModule,
    MatNormalTableComponent,
    MainMaterialModule,
    CommonBreadcrumbComponent,
    ShowErrorsComponent,
    SelectInputComponent,
    RouterModule,
    ArrayToStringPipe,
    TimeAgoPipe
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    ApexChartService,
    DatePipe
  ]
})
export class SharedModule {
  // static forRoot(): ModuleWithProviders {
  //     return {
  //         ngModule: SharedModule
  //     };
  // }

  // constructor(@Optional() @SkipSelf() shared: SharedModule) {
  //   if(shared){
  //     throw new Error('You Shall not run')
  //   }
  // }
}
