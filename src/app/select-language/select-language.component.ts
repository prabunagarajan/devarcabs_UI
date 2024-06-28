import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-select-language',
  template: `
    <select #langSelect (change)="onLangChange(langSelect.value)" class="language-select-box">
      <option
        *ngFor="let lang of langs"
        [value]="lang.id"
        [attr.selected]="lang.id === translate.currentLang ? '' : null"
      >{{lang.name}}</option>
    </select>
  `,
})
export class SelectLanguageComponent {
  langs = [{ id: 'en', name: 'English' }, { id: 'hi', name: 'Hindi' }];
  constructor(public translate: TranslateService) { }

  onLangChange( lang ) {
    // console.log('lang::', lang);
    this.translate.use(lang);
  }
}
