import { AfterViewInit, Component, ElementRef, EventEmitter, NgZone, OnInit, Output, ViewChild } from '@angular/core';
import { NavigationItem } from '../navigation';
import { NextConfig } from '../../../../../app-config';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav-content',
  templateUrl: './nav-content.component.html',
  styleUrls: ['./nav-content.component.scss']
})
export class NavContentComponent implements OnInit, AfterViewInit {
  public nextConfig: any;
  public navigation: any;
  public prevDisabled: string;
  public nextDisabled: string;
  public contentWidth: number;
  public wrapperWidth: any;
  public scrollWidth: any;
  public windowWidth: number;

  @Output() onNavMobCollapse = new EventEmitter();

  @ViewChild('navbarContent', {static: false}) navbarContent: ElementRef;
  @ViewChild('navbarWrapper', {static: false}) navbarWrapper: ElementRef;

  constructor(public nav: NavigationItem, private zone: NgZone, private location: Location) {
    this.nextConfig = NextConfig.config;
    this.windowWidth = window.innerWidth;

    this.navigation = this.nav.get();
    // console.log('nav-content-construct');
    this.prevDisabled = 'disabled';
    this.nextDisabled = '';
    this.scrollWidth = 0;
    this.contentWidth = 0;
  }

  ngOnInit() {
    this.navigation = this.nav.get();
    // console.log('this.nav-navigation ->', this.navigation);
    // console.log('nav-content-oninit');
    if (this.windowWidth < 992) {
      this.nextConfig.layout = 'vertical';
      setTimeout(() => {
        document.querySelector('.pcoded-navbar').classList.add('menupos-static');
        (document.querySelector('#nav-ps-next') as HTMLElement).style.maxHeight = '100%';
      }, 500);
    }
  }

  ngAfterViewInit() {
    if (this.nextConfig.layout === 'horizontal') {
      this.contentWidth = this.navbarContent.nativeElement.clientWidth;
      this.wrapperWidth = this.navbarWrapper.nativeElement.clientWidth;
    }
    // console.log('fireOutClick');
    this.fireOutClick();
  }

  scrollPlus() {
    this.scrollWidth = this.scrollWidth + (this.wrapperWidth - 80);
    if (this.scrollWidth > (this.contentWidth - this.wrapperWidth)) {
      this.scrollWidth = this.contentWidth - this.wrapperWidth + 80;
      this.nextDisabled = 'disabled';
    }
    this.prevDisabled = '';
    if (this.nextConfig.rtlLayout) {
      (document.querySelector('#side-nav-horizontal') as HTMLElement).style.marginRight = '-' + this.scrollWidth + 'px';
    } else {
      (document.querySelector('#side-nav-horizontal') as HTMLElement).style.marginLeft = '-' + this.scrollWidth + 'px';
    }
  }

  scrollMinus() {
    this.scrollWidth = this.scrollWidth - this.wrapperWidth;
    if (this.scrollWidth < 0) {
      this.scrollWidth = 0;
      this.prevDisabled = 'disabled';
    }
    this.nextDisabled = '';
    if (this.nextConfig.rtlLayout) {
      (document.querySelector('#side-nav-horizontal') as HTMLElement).style.marginRight = '-' + this.scrollWidth + 'px';
    } else {
      (document.querySelector('#side-nav-horizontal') as HTMLElement).style.marginLeft = '-' + this.scrollWidth + 'px';
    }

  }

  fireLeave() {
    const sections = document.querySelectorAll('.pcoded-hasmenu');
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
  }

  navMob() {
    if (this.windowWidth < 992 && document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
      this.onNavMobCollapse.emit();
    }
  }

  fireOutClick() {
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
