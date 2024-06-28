import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-show-errors',
  templateUrl: './show-errors.component.html',
  styleUrls: ['./show-errors.component.scss']
})
export class ShowErrorsComponent {

  private static readonly errorMessages = {
    required: () => 'This field is required',
    minlength: (params) => 'The min number of characters is ' + params.requiredLength,
    maxlength: (params) => 'The max allowed number of characters is ' + params.requiredLength,
    pattern: (params) => 'The required pattern is: ' + params.requiredPattern,
    years: (params) => params.message,
    countryCity: (params) => params.message,
    uniqueName: (params) => params.message,
    telephoneNumbers: (params) => params.message,
    telephoneNumber: (params) => params.message
  };

  @Input()
  public control: AbstractControlDirective | AbstractControl;

  @Input()
  public frmSub: boolean;

  @Input()
  public eleName: string;

  shouldShowErrors(): boolean {
    const state = this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched);
    return state;
  }

  listOfErrors(): string[] {    
    return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field]));
  }

  private getMessage(type: string, params: any) {
    return ShowErrorsComponent.errorMessages[type](params);
  }


}
