import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '@appThemeShared/shared.module';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { AppComponent } from './app.component';
import { AdminComponent } from '@appThemeLayout/admin/admin.component';
import { AuthComponent } from '@appThemeLayout/auth/auth.component';
import { NavigationComponent } from '@appThemeLayout/admin/navigation/navigation.component';
import { NavContentComponent } from '@appThemeLayout/admin/navigation/nav-content/nav-content.component';
import { NavGroupComponent } from '@appThemeLayout/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavCollapseComponent } from '@appThemeLayout/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavItemComponent } from '@appThemeLayout/admin/navigation/nav-content/nav-item/nav-item.component';
import { NavBarComponent } from '@appThemeLayout/admin/nav-bar/nav-bar.component';
import { NavLeftComponent } from '@appThemeLayout/admin/nav-bar/nav-left/nav-left.component';
import { NavSearchComponent } from '@appThemeLayout/admin/nav-bar/nav-left/nav-search/nav-search.component';
import { NavRightComponent } from '@appThemeLayout/admin/nav-bar/nav-right/nav-right.component';
import { ConfigurationComponent } from '@appThemeLayout/admin/configuration/configuration.component';

import { ToggleFullScreenDirective } from '@appThemeShared/full-screen/toggle-full-screen';

/* Menu Items */
import { NavigationItem } from '@appThemeLayout/admin/navigation/navigation';
import { HttpClient, HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { ToastrModule } from 'ngx-toastr';

import { SelectLanguageComponent } from '@app/select-language/select-language.component';

import { MasterapiService } from '@app/services';

import { TranslateModule, TranslateLoader, TranslateService, } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { httpInterceptorProviders } from './interceptors';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import { CommonPopupComponent } from './_shared/common-popup/common-popup.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormInputComponent } from './_shared/components/form-input/form-input.component';

import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireModule } from '@angular/fire';
import { MessagingService } from './services/messaging.service';
import { AsyncPipe } from '@angular/common';
import { ColThreeLabelComponent } from './_shared/components/col-three-label/col-three-label.component';
import { ProfLabValComponent } from './_shared/components/prof-lab-val/prof-lab-val.component';
import { EmailVerificationComponent } from './_shared/email-verification/email-verification.component';
import { WelcomeComponent } from './containers/welcome/welcome.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './services/interceptors/loader-interceptor.service';
import { MyLoaderComponent } from './components/my-loader/my-loader.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    NavigationComponent,
    NavContentComponent,
    NavGroupComponent,
    NavCollapseComponent,
    NavItemComponent,
    NavBarComponent,
    NavLeftComponent,
    NavSearchComponent,
    NavRightComponent,
    ConfigurationComponent,
    ToggleFullScreenDirective,
    SelectLanguageComponent,
    PageNotFoundComponent,
    CommonPopupComponent,
    FormInputComponent,
    ColThreeLabelComponent,
    ProfLabValComponent,
    EmailVerificationComponent,
    WelcomeComponent,
    MyLoaderComponent,

  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgxDaterangepickerMd.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }
    }),
    ToastrModule.forRoot(
      {
        timeOut: 3000,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
        closeButton: true
      }
    ),
    NgMultiSelectDropDownModule.forRoot(),
    AngularFireMessagingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyASdB5yCYDcukbtX7rnmpl22KMcYVbOWcE",
      authDomain: "up-excise-test.firebaseapp.com",
      projectId: "up-excise-test",
      storageBucket: "up-excise-test.appspot.com",
      messagingSenderId: "674441976789",
      appId: "1:674441976789:web:138e42e76ee2bbcbb37b5c",
      measurementId: "G-539DPQM7CG"
    }),
  ],
  entryComponents: [CommonPopupComponent,EmailVerificationComponent],
  providers: [
    NavigationItem,
    httpInterceptorProviders,
    MessagingService, AsyncPipe,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor() {}

  constructor(
    private translate: TranslateService,
    private masterApi: MasterapiService
  ) {
    this.translate.addLangs(['en', 'hi', 'tn']);
    const defLang = 'en';
    this.translate.setDefaultLang( defLang );

    const sessionLang = sessionStorage.getItem('curLang');
    if ( sessionLang ) {
      this.translate.use( sessionLang );
    } else {
      this.translate.use( defLang );
      sessionStorage.setItem('curLang', defLang );
    }

    this.translate.onLangChange.subscribe((ele) => {
      // console.log('AppModule-langchange:', ele);
      this.translate.use(ele.lang);
      sessionStorage.setItem('curLang', ele.lang);
      this.masterApi.langChange.emit( ele.lang );
    });

    // if (sessionStorage.getItem('curLang')) {
    //   this.translate.setDefaultLang(sessionStorage.getItem('curLang'));
    // } else {
    //   const browserLang = this.translate.getBrowserLang();
    //   this.translate.use(browserLang.match(/en|hi/) ? browserLang : 'en');
    //   sessionStorage.setItem('curLang', 'en');
    // }
  }
}

