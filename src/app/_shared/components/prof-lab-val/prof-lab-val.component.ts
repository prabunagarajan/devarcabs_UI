import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-prof-lab-val',
  templateUrl: './prof-lab-val.component.html',
  styleUrls: ['./prof-lab-val.component.scss']
})
export class ProfLabValComponent {

  @Input()
  public label: string;

  @Input()
  public value: string;

}
