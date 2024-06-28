import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-nav-search',
  templateUrl: './nav-search.component.html',
  styleUrls: ['./nav-search.component.scss']
})
export class NavSearchComponent implements OnInit {
  time: string;
  ipaddress: string;
  pipe = new DatePipe('en-US');
  time1: string;
  time2: any;
  date: string;
  timestamp;
  clock:any=""
  constructor() { }

  ngOnInit() {
    this.time = sessionStorage.getItem('loginDateTime');
    this.ipaddress = sessionStorage.getItem('loginRemoteIp');
    this.time2 = this.pipe.transform(this.time, 'h:mm:ss a');
    this.date = this.pipe.transform(this.time, 'd MMM y');
    const dt = new Date(this.time);
    this.show2(dt);
  }

  show2(dt) {
    const addedTime = dt.setSeconds(dt.getSeconds() + 1);
    const addedDate = new Date(addedTime);
    const hours = addedDate.getHours();
    const minutes = addedDate.getMinutes();
    const seconds = addedDate.getSeconds();
    const dn = (hours < 12) ? 'AM' : 'PM';
    const calHour = (hours > 12) ? hours - 12 : hours;
    const curHour = (calHour === 0) ? 12 : calHour;
    const curminutes = (minutes <= 9) ? '0' + minutes : minutes;
    const curseconds = (seconds <= 9) ? '0' + seconds : seconds;
    const ctime = curHour + ':' + curminutes + ':' + curseconds + ' ' + dn;
    const currentDate = new Date();
    // this.timestamp = currentDate.getTime(); 
    this.timestamp = setInterval(()=>{
      this.clock = new Date()
    },1000);
    // const clock = document.getElementById('clock') as HTMLSpanElement;
    // clock.innerHTML = ctime;
    // setTimeout(() => {
    //   this.show2(addedDate);
    // }, 1000);
  }

}
