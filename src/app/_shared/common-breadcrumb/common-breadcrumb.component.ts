import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-common-breadcrumb',
  templateUrl: './common-breadcrumb.component.html',
  styleUrls: ['./common-breadcrumb.component.scss']
})
export class CommonBreadcrumbComponent implements OnInit {

  @Input() titleSection: {};
  @Input() breadcrumbs: [];
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
