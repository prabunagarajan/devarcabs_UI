import { Component, OnInit, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss']
})
export class SelectInputComponent implements OnInit {

  @Input()
  public control: AbstractControlDirective | AbstractControl;

  @Input()
  public frmSub: boolean;

  @Input()
  public eleName: string;

  @Input()
  public dataArr: [];

  constructor() { }

  ngOnInit() {
  }

}
