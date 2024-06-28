import {Component, Input, OnInit} from '@angular/core';
import {NavigationItem} from '../../navigation';
import {Location} from '@angular/common';
import {NextConfig} from '../../../../../../app-config';

@Component({
  selector: 'app-nav-group',
  templateUrl: './nav-group.component.html',
  styleUrls: ['./nav-group.component.scss']
})
export class NavGroupComponent implements OnInit {
  @Input() item: NavigationItem;
  @Input() layout1 = false;
  @Input() activeId: any;
  public nextConfig: any;

  constructor(private location: Location) {
    this.nextConfig = NextConfig.config;
  }

  ngOnInit() {
    // at reload time active and trigger link
    let currentUrl = this.location.path();
    // tslint:disable-next-line: no-string-literal
    const baseHref = this.location['_baseHref'];
    if (baseHref) {
      currentUrl = baseHref + this.location.path();
    }
    const link = 'a.nav-link[ href=\'' + currentUrl + '\' ]';
    const ele = document.querySelector(link);
    if (ele !== null && ele !== undefined) {
      const parent = ele.parentElement;
      const upParent = parent.parentElement.parentElement;
      const lastParent = upParent.parentElement;
      if (parent.classList.contains('pcoded-hasmenu')) {
        if (this.nextConfig.layout === 'vertical') {
          parent.classList.add('pcoded-trigger');
        }
        parent.classList.add('active');
      } else if (upParent.classList.contains('pcoded-hasmenu')) {
        if (this.nextConfig.layout === 'vertical') {
          upParent.classList.add('pcoded-trigger');
        }
        upParent.classList.add('active');
      } else if (lastParent.classList.contains('pcoded-hasmenu')) {
        if (this.nextConfig.layout === 'vertical') {
          lastParent.classList.add('pcoded-trigger');
        }
        lastParent.classList.add('active');
      }
    }
  }

}
