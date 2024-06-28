import { Component, Input, OnInit } from '@angular/core';
import { NavigationItem } from '../../navigation';
import { NextConfig } from '../../../../../../app-config';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {
  @Input() item: NavigationItem;
  public nextConfig: any;
  public themeLayout: string;

  constructor(private location: Location, private route: ActivatedRoute) {
    this.nextConfig = NextConfig.config;
    this.themeLayout = this.nextConfig.layout;
  }

  ngOnInit() {
  }
  sidenav(dat) {
    if (dat.target == true) {
      window.open(dat.url);
    }
  }
  closeOtherMenu(event) {
    if (this.nextConfig.layout === 'vertical') {
      const ele = event.target;
      if (ele !== null && ele !== undefined) {
        let parent: any;
        if (ele.parentElement.tagName === "A") {
          parent = ele.parentElement.parentElement;
        } else {
          parent = ele.parentElement;
        }

        const upParent = parent.parentElement.parentElement;
        const lastParent = upParent.parentElement;
        const thirdLevelElement = lastParent.parentElement.parentElement.parentElement;
        // console.log(lastParent);
        const sections = document.querySelectorAll('.pcoded-hasmenu');
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < sections.length; i++) {
          sections[i].classList.remove('active');
          sections[i].classList.remove('pcoded-trigger');
        }

        if (parent.classList.contains('pcoded-hasmenu')) {
          parent.classList.add('pcoded-trigger');
          parent.classList.add('active');
        } else if (upParent.classList.contains('pcoded-hasmenu')) {
          upParent.classList.add('pcoded-trigger');
          upParent.classList.add('active');
        } else if (lastParent.classList.contains('pcoded-hasmenu')) {
          lastParent.classList.add('pcoded-trigger');
          lastParent.classList.add('active');
          if (thirdLevelElement.nodeName === 'LI') {
            thirdLevelElement.classList.add('pcoded-trigger');
            thirdLevelElement.classList.add('active');
          }
        }
      }
      if ((document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open'))) {
        document.querySelector('app-navigation.pcoded-navbar').classList.remove('mob-open');
      }
    } else {
      setTimeout(() => {
        const sections = document.querySelectorAll('.pcoded-hasmenu');
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < sections.length; i++) {
          sections[i].classList.remove('active');
          sections[i].classList.remove('pcoded-trigger');
        }

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
            parent.classList.add('active');
          } else if (upParent.classList.contains('pcoded-hasmenu')) {
            upParent.classList.add('active');
          } else if (lastParent.classList.contains('pcoded-hasmenu')) {
            lastParent.classList.add('active');
          }
        }
      }, 500);
    }
  }

}
