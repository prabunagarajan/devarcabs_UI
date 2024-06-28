import {
  Component,
  ElementRef,
  AfterViewInit,
  ViewChild, OnInit
} from '@angular/core';
import { ChartDB } from '@app/containers/fack-db/chart-data';
import { ApexChartService } from '@appThemeShared/components/chart/apex-chart/apex-chart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '@app/services/helpdesk/dashboardservice';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import HC_more from "highcharts/highcharts-more";
HC_more(Highcharts);
import { HighchartsService } from '../../../services/helpdesk/highcharts.service';
import { elementAt } from 'rxjs-compat/operator/elementAt';
import * as moment from 'moment';
import { AlertService } from '@app/services';
import { CommonApiServiceService } from '@app/services/helpdesk/common-api-service.service';
import { apiUrls } from '@appEnv/apiurls';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  openTicketsForPie = 0.0;
  inprogressTicketsForPie = 0.0;
  closedTicketsForPie = 0.0;

  openTicketsForTiles = 0;
  inprogressTicketsForTiles = 0;
  closedTicketsForTiles = 0;
  totalTicketsForTiles = 0;

  inprogressTicketsForBarchart = [];
  openTicketsForBarchart = [];
  closedTicketsForBarchart = [];
  totalTicketsForBarchart = 0;

  xAxisForOpen = [];
  xAxisForInprogress = [];
  xAxisForClosed = [];

  Highcharts: typeof Highcharts = Highcharts;
  public chartOptionsForBarChart: Highcharts.Options;
  public chartOptionsForPieChart: Highcharts.Options;
  public chartDB: any;
  public dailyVisitorStatus: string;
  public dailyVisitorAxis: any;
  public deviceProgressBar: any;
  dashboardCount: any;
  constructor(public apexEvent: ApexChartService, private dsservice: DashboardService,
    private router: Router, private alert: AlertService, private hcs: HighchartsService,
    private service: CommonApiServiceService) {
    this.chartDB = ChartDB;
    this.dailyVisitorStatus = '1y';

    this.deviceProgressBar = [
      {
        type: 'success',
        value: 66
      }, {
        type: 'primary',
        value: 26
      }, {
        type: 'danger',
        value: 8
      }
    ];
  }
  role = ''
  currentYear: any
  createObj: any = {
    fromdate: '',
    todate: '',
    Year: '',
    month: ''
  }
  monthlist: any = [
    { id: "01", month: 'January' },
    { id: "02", month: 'February' },
    { id: "03", month: 'March' },
    { id: "04", month: 'April' },
    { id: "05", month: 'May' },
    { id: "06", month: 'June' },
    { id: "07", month: 'July' },
    { id: "08", month: 'August' },
    { id: "09", month: 'September' },
    { id: "10", month: 'October' },
    { id: "11", month: 'November' },
    { id: "12", month: 'December' },
  ]
  date: any;
  year: any;
  month: any;
  toDate: any;
  todate: any;
  Yearlist: any = [];

  ngOnInit() {
    this.role = localStorage.getItem('RoleName')
    this.currentYear = moment(new Date()).format("yyyy")
    const d = new Date(), y = d.getFullYear(), m = d.getMonth();
    this.year = d.getFullYear()

    let currentYear = new Date().getFullYear()
    this.createObj['Year'] = currentYear
    let diff = currentYear - 2023
    if (diff > 0) {
      for (let index = 0; index <= diff;) {
        const element = currentYear - index;
        this.Yearlist.push(element)
        index++;
      }
    } else {
      this.Yearlist.push(currentYear)
    }

    this.date = moment(d).format("yyyy-MM-DD");
    this.month = moment(d).format("MM")
    this.createObj['month'] = moment(d).format("MM")
    this.createObj['fromdate'] = this.year + '-' + this.createObj['month'] + '-01'
    this.toDate = new Date(y, this.createObj['month'], 0);
    this.toDate = moment(this.toDate).format("DD")
    this.todate = moment(d).format("DD")
    this.createObj['todate'] = this.year + '-' + this.createObj['month'] + '-' + this.toDate
    // console.log("sc",this.currentYear);

    // setTimeout(() => {
    //   this.createPieChart()
    // })
    // setTimeout(() => {
    //   this.createBarChart();
    // });
    this.getTilesAndPiechartData();
    this.getBarChart();
    this.getDashboardcountData()
  }

  createPieChart() {
    this.chartOptionsForPieChart = {
      chart: {
        plotBackgroundColor: 'lightgray',
        plotBorderWidth: null,
        plotShadow: true,
        type: 'pie'
      },
      title: {
        text: 'Tickets'
      },
      credits: {
        enabled: false
      },
      tooltip: {
        pointFormat: '{series.name}: {point.percentage:.1f}%'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '{point.name}: {point.percentage:.1f} %'
          },
          showInLegend: true
        },
      },
      series: [{
        type: 'pie',
        name: 'Total Tickets',
        data: [
          {
            name: 'Open Tickets',
            y: this.openTicketsForPie,
            color: 'darkblue'//Highcharts.getOptions().colors[4]
          },
          {
            name: 'Inprogress Tickets',
            y: this.inprogressTicketsForPie,
            color: 'orange'//Highcharts.getOptions().colors[3]
          },
          {
            name: 'Closed Tickets',
            y: this.closedTicketsForPie,
            color: 'green'//Highcharts.getOptions().colors[2]
          },
        ]
      }]
    };
    HC_exporting(Highcharts);
  }

  xAxisForBarchart = [];

  private createBarChart() {
    this.chartOptionsForBarChart = {
      title: {
        text: undefined
      },

      exporting: {
        enabled: true
      },

      credits: {
        enabled: false
      },

      chart: {
        plotBackgroundColor: 'white',
        plotBorderWidth: 2,
        plotShadow: true,
        type: 'column'
      },

      xAxis: {
        alignTicks: true,
        type: undefined,
        tickPosition: 'outside',
        allowDecimals: false,
        showEmpty: true,
        crosshair: true,
        lineColor: 'black',
        title: {
          text: 'Total Tickets - ' + this.totalTicketsForBarchart
        },
        lineWidth: 2,
        categories: this.xAxisForBarchart
      },

      yAxis: {
        min: 0,
        alignTicks: true,
        showEmpty: true,
        showFirstLabel: true,
        showLastLabel: true,
        lineWidth: 2,
        tickWidth: 0,
        lineColor: 'black',
        //crosshair: true,
        minorTickInterval: null,
        tickAmount: 6,
        labels: {
          y: 16,
          overflow: 'justify'
        },
        title: {
          text: "Tickets"
        },
        allowDecimals: false,
        visible: true,
        tickmarkPlacement: 'on'
      },

      tooltip: {
        valuePrefix: ''
      },

      series: [{
        type: 'column',
        name: 'Open Tickets',
        data: this.openTicketsForBarchart,
        color: 'blue'//Highcharts.getOptions().colors[0]
      }, {
        type: 'column',
        name: 'Inprogress Tickets',
        data: this.inprogressTicketsForBarchart,
        color: 'orange'//Highcharts.getOptions().colors[5]
      }, {
        type: 'column',
        name: 'Closed Tickets',
        data: this.closedTicketsForBarchart,
        // color: Highcharts.getOptions().colors[2]
        color: 'green'//Highcharts.getOptions().colors[2]

      }
      ]
    };
    HC_exporting(Highcharts);
  }

  getTilesAndPiechartData() {

    if (localStorage.getItem('RoleName') == 'DEPARTMENT') {
      this.getDeptPiechartData()
    } else {
      this.getAdminPiechartData()
    }

  }
  getDeptPiechartData() {
    this.hcs.getTilesAndPiechartData().subscribe((res: any) => {
      if (res.status == 's' && res.errorCode == 200) {
        res.data.map(element => {
          if (element.status == 'Need Clarification from Dept.' || element.status == 'Escalated' ||
            element.status == 'Need Clarification' || element.status == 'Change Request' || element.status == 'Assigned' ||
            element.status == 'Pending' || element.status == 'Escalate to  Security Management' || element.status == 'Escalate to Service Provider' ||
            element.status == 'Recovery Time Objective' || element.status == 'Recovery Point Objective') {
            this.inprogressTicketsForPie += element.percentage;
            this.inprogressTicketsForTiles += element.count;
            this.totalTicketsForTiles = element.totcount;
          }
          else if (element.status == 'Open' || element.status == "Reopen") {
            this.openTicketsForPie += element.percentage;
            this.openTicketsForTiles += element.count;
          }
          else if (element.status == "Resolved" || element.status == 'Closed' || element.status == "Call Closer Reported") {
            this.closedTicketsForPie += element.percentage;
            this.closedTicketsForTiles += element.count;
          }
        })
        this.createPieChart();
      } else {
        this.alert.showError(res.userDisplayMesg, 'Error');
      }
    });
  }
  getAdminPiechartData() {
    this.hcs.getTilesAndPiechartData().subscribe((res: any) => {
      if (res.status == 's' && res.errorCode == 200) {
        res.data.map(element => {
          if (element.status == 'Need Clarification from Dept.' || element.status == 'Escalated' ||
            element.status == 'Need Clarification' || element.status == 'Change Request' || element.status == 'Assigned' ||
            element.status == 'Pending' || element.status == 'Escalate to  Security Management' || element.status == 'Escalate to Service Provider' ||
            element.status == 'Recovery Time Objective' || element.status == 'Recovery Point Objective') {
            // this.inprogressTicketsForPie += element.percentage;
            // this.inprogressTicketsForTiles += element.count;
            // this.totalTicketsForTiles = element.totcount;
          }
          else if (element.status == 'Open' || element.status == "Reopen") {
            // this.openTicketsForPie += element.percentage;
            // this.openTicketsForTiles += element.count;
          }
          else if (element.status == 'Closed' || element.status == "Resolved" || element.status == "Call Closer Reported") {
            // this.closedTicketsForPie += element.percentage;
            // this.closedTicketsForTiles += element.count;
          }
        })
        this.createPieChart();
      } else {
        this.alert.showError(res.userDisplayMesg, 'Error');
      }
    });
  }
  getDeptBarChart() {
    this.hcs.getBarChart().subscribe((res: any) => {
      if (res.status == 's' && res.errorCode == 200) {
        res.data.map(element => {
          if (element.status == 'Open' || element.status == 'Reopen') {
            if (!this.xAxisForOpen.includes(element.month)) {
              this.xAxisForOpen.push(element.month);
              this.openTicketsForBarchart.push(element.count);
            } else {
              this.openTicketsForBarchart[this.openTicketsForBarchart.length - 1] = this.openTicketsForBarchart[this.openTicketsForBarchart.length - 1] + element.count;
            }
          } else if (element.status == 'Need Clarification from Dept.' || element.status == 'Escalated' ||
            element.status == 'Need Clarification' || element.status == 'Change Request' || element.status == 'Assigned' ||
            element.status == 'Pending' || element.status == 'Escalate to  Security Management' || element.status == 'Escalate to Service Provider' ||
            element.status == 'Recovery Time Objective' || element.status == 'Recovery Point Objective') {
            if (!this.xAxisForInprogress.includes(element.month)) {
              this.xAxisForInprogress.push(element.month);
              this.inprogressTicketsForBarchart.push(element.count)
            } else {
              this.inprogressTicketsForBarchart[this.inprogressTicketsForBarchart.length - 1] = this.inprogressTicketsForBarchart[this.inprogressTicketsForBarchart.length - 1] + element.count;
            }
          } else if (element.status == 'Closed' || element.status == 'Resolved' || element.status == 'Call Closer Reported') {
            if (!this.xAxisForClosed.includes(element.month)) {
              this.closedTicketsForBarchart.push(element.count);
              this.xAxisForClosed.push(element.month);
            } else {
              this.closedTicketsForBarchart[this.closedTicketsForBarchart.length - 1] = this.closedTicketsForBarchart[this.closedTicketsForBarchart.length - 1] + element.count;
            }
          }
          if (element.status == 'Open') {
            this.totalTicketsForBarchart += element.totcount;
          }
        });
        this.xAxisForBarchart = this.xAxisForInprogress;
        this.createBarChart();
      } else {
        this.openTicketsForBarchart = [];
        this.inprogressTicketsForBarchart = [];
        this.closedTicketsForBarchart = [];
        this.xAxisForBarchart = [];
        this.createBarChart();

        this.alert.showError(res.userDisplayMesg, 'Error');

      }
    })
  }
  getAdminBarChart() {
    this.hcs.getBarChart().subscribe((res: any) => {
      if (res.status == 's' && res.errorCode == 200) {
        // res.data.map(element => {
        if (res.data[0].month_name != undefined) {
          this.xAxisForInprogress.push(res.data[0].month_name)
          if (res.data[0].open_Total != undefined) {
            this.openTicketsForBarchart.push(res.data[0].open_Total);
          } if (res.data[0].pending_Total != undefined) {
            this.inprogressTicketsForBarchart.push(res.data[0].pending_Total)
          } if (res.data[0].closed_Total != undefined) {
            this.closedTicketsForBarchart.push(res.data[0].closed_Total);
          }
        }
        if (res.data[1].month_name != undefined) {
          this.xAxisForInprogress.push(res.data[1].month_name)
          if (res.data[1].open_Total != undefined) {
            this.openTicketsForBarchart.push(res.data[1].open_Total);
          } if (res.data[1].pending_Total != undefined) {
            this.inprogressTicketsForBarchart.push(res.data[1].pending_Total)
          } if (res.data[1].closed_Total != undefined) {
            this.closedTicketsForBarchart.push(res.data[1].closed_Total);
          }
        }

        if (res.data[2].month_name != undefined) {
          this.xAxisForInprogress.push(res.data[2].month_name)
          if (res.data[2].open_Total != undefined) {
            this.openTicketsForBarchart.push(res.data[2].open_Total);
          } if (res.data[2].pending_Total != undefined) {
            this.inprogressTicketsForBarchart.push(res.data[2].pending_Total)
          } if (res.data[2].closed_Total != undefined) {
            this.closedTicketsForBarchart.push(res.data[2].closed_Total);
          }
        }
        res.data.map(element => {
          this.totalTicketsForBarchart += element.total_Tickets;
        })       
        this.xAxisForBarchart = this.xAxisForInprogress;
        this.createBarChart();
      } else {
        this.openTicketsForBarchart = [];
        this.inprogressTicketsForBarchart = [];
        this.closedTicketsForBarchart = [];
        this.xAxisForBarchart = [];
        this.createBarChart();

        this.alert.showError(res.userDisplayMesg, 'Error');

      }
    })
  }
  getBarChart() {
    if (localStorage.getItem('RoleName') == 'DEPARTMENT') {
      this.getDeptBarChart()
    } else {
      this.getAdminBarChart()
    }

  }

  getDashboardcountData() {
    if (this.createObj['Year'] == this.year && this.createObj['month'] == this.month) {
      let d = new Date();
      this.todate = moment(d).format("DD")
    } else {
      this.toDate = new Date(this.createObj['Year'], this.createObj['month'], 0);
      this.todate = moment(this.toDate).format("DD")
      this.toDate = moment(this.toDate).format("DD")
    }
    let req = {
      "fromDate": this.createObj['Year'] + '-' + this.createObj['month'] + '-01',
      "toDate": this.createObj['Year'] + '-' + this.createObj['month'] + '-' + this.toDate,
    }
    this.service.post(apiUrls.getDashboardCount, req).subscribe((res: any) => {
      if (res.status == 's' && res.errorCode == 200) {
        this.dashboardCount = res.data[0]
        this.inprogressTicketsForTiles = Number(this.dashboardCount.pending_Total)

        this.inprogressTicketsForPie = this.dashboardCount.pending_Percentage

        this.openTicketsForTiles = Number(this.dashboardCount.open_Total)
        this.openTicketsForPie = this.dashboardCount.open_Percentage

        this.closedTicketsForTiles = Number(this.dashboardCount.closed_Total)
        this.closedTicketsForPie = this.dashboardCount.closed_Percentage

        this.totalTicketsForTiles = Number(this.dashboardCount.total_Tickets)
        // res.data.map(element => {
        //   if (element.status == 'Need Clarification from Dept.' || element.status == 'Escalated' ||
        //     element.status == 'Need Clarification' || element.status == 'Change Request' || element.status == 'Assigned' ||
        //     element.status == 'Pending' || element.status == 'Escalate to  Security Management' || element.status == 'Escalate to Service Provider' ||
        //     element.status == 'Recovery Time Objective' || element.status == 'Recovery Point Objective') {
        //     // this.inprogressTicketsForPie += element.percentage;
        //     this.inprogressTicketsForTiles += element.count;
        //     this.totalTicketsForTiles = element.totcount;
        //   }
        //   else if (element.status == 'Open' || element.status == "Reopen") {
        //     this.openTicketsForPie += element.percentage;
        //     this.openTicketsForTiles += element.count;
        //   }
        //   else if (element.status == 'Closed' || element.status == "Resolved" || element.status == "Call Closer Reported") {
        //     this.closedTicketsForPie += element.percentage;
        //     this.closedTicketsForTiles += element.count;
        //   }
        // })
        this.createPieChart();
      } else {
        this.alert.showError(res.userDisplayMesg, 'Error');
      }
    });
  }

  clear() {
    this.createObj = {
      Year: this.year,
      month: this.month,
    }
    // this.createObj['fromdate'] = moment(this.date).format("yyyy-01-01");
    // this.createObj['todate'] = moment(this.date).format("yyyy-MM-DD");
    this.getDashboardcountData()
  }
  navigateViewTicketStatus(id) {
    this.router.navigate(['/helpdesk/reports/ticket-report-status', id, this.createObj['Year'], this.createObj['month'], 'Dashboard']);
  }
}
