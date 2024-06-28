import { NgModule } from '@angular/core';
import { SharedModule } from '@appThemeShared/shared.module';
import { DatePipe } from '@angular/common';

import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HelpdeskRoutingModule } from './helpdesk-routing.module';
import { MasterapiService } from '@app/services';
import { MainMaterialModule } from '@app/_shared/material-module';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  imports: [
    SharedModule,
    MainMaterialModule,
    HelpdeskRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [DatePipe]
})

export class HelpdeskModule {

  constructor(
    private translate: TranslateService,
    private masterApi: MasterapiService
  ) {

    const sessionLang = sessionStorage.getItem('curLang')
    this.translate.use(sessionLang);

    this.translate.onLangChange.subscribe((ele) => {

      this.translate.use(ele.lang);
    });

    this.masterApi.langChange.subscribe((lang) => {

      this.translate.use(lang);
      sessionStorage.setItem('curLang1',lang)
    });
  }
}