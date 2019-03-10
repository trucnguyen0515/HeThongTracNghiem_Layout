import { Component, OnInit } from '@angular/core';
import Calendar from 'tui-calendar';

declare let $: any;
declare let Chart: any;
declare let AmCharts: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() {
    $(document).ready(function () {
      $('#table-user').DataTable();
      $('tbody').sortable();
      $('tbody').disableSelection();
    });
  }

  createChart(tenChart) {
    const ctx = (<HTMLCanvasElement>document.getElementById(tenChart)).getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
        datasets: [
          {
            label: 'So luong',
            lineTension: 0.3,
            backgroundColor: 'rgba(2,117,216,0.2)',
            borderColor: 'rgba(2,117,216,1)',
            pointRadius: 5,
            pointBackgroundColor: 'rgba(2,117,216,1)',
            pointBorderColor: 'rgba(255,255,255,0.8)',
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(2,117,216,1)',
            pointHitRadius: 50,
            pointBorderWidth: 2,
            data: [25, 23, 26, 24, 25, 32, 30, 24, 19]
          }
        ]
      },
      options: {
        legend: { display: !1 },
        yAxes: [
          {
            gridLines: {
              display: false
            },
            maxTicksLimit: 5
          }
        ],
        xAxes: [
          {
            gridLines: {
              display: false
            },
            ticks: {
              maxTicksLimit: 7
            }
          }
        ]
      }
    });
  }

  createChartAnalytics(tenChart) {
    const ctx = (<HTMLCanvasElement>document.getElementById(tenChart)).getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
          '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
          '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
        datasets: [{
          label: 'Sales Analytics',
          backgroundColor: '#00acc1',
          borderColor: '#00acc1',
          borderWidth: 1,
          hoverBackgroundColor: '#d4570f',
          hoverBorderColor: '#d4570f',
          data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81, 56, 89, 40]
        }]},
        options: {
          legend: { display: !1 },
          scales: {
            yAxes: [{
              gridLines: { display: !1 },
              ticks: { max: 100, min: 20, stepSize: 20 } }],
              xAxes: [{ barPercentage: .3, gridLines: { color: 'rgba(0,0,0,0.05)' }
            }]
          }
        }
    });
  }

  createChartMarketPlaces(tenChart) {
    const ctx = (<HTMLCanvasElement>document.getElementById(tenChart)).getContext('2d');
    const chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['User', 'Visit', 'Đề Thi'],
        datasets: [{ data: [80, 50, 100],
        backgroundColor: ['#02a8b5', '#f1556c', '#e3eaef'],
        hoverBackgroundColor: ['#02a8b5', '#f1556c', '#e3eaef'],
        borderWidth: 3, hoverBorderColor: '#fff' }] },
        options: {
          cutoutPercentage: 80,
          legend: {
            position: 'bottom',
            labels: { padding: 30 }
          }
      }
    });
  }

  createWorldMap() {
    const map = AmCharts.makeChart('chartdiv', {
      'type': 'map',
      'theme': 'light',
      'projection': 'miller',

      'dataProvider': {
        'map': 'worldLow',
        'getAreasFromMap': true
      },
      'areasSettings': {
        'autoZoom': true,
        'selectedColor': '#CC0000'
      },
      'smallMap': {},
      'listeners': [{
        'event': 'init',
        'method': function (e) {

          const a_map = e.chart;

          /**
           * Log initial zoom settings
           */
          a_map.initialZoom = {
            'zoomLevel': e.chart.zoomLevel(),
            'zoomLongitude': e.chart.zoomLongitude(),
            'zoomLatitude': e.chart.zoomLatitude()
          };
        }
      }],
      'export': {
        'enabled': true,
        'position': 'bottom-right',
        'beforeCapture': function () {
          const b_map = this.setup.chart;
          /**
           * Log current zoom settings so we can restore after export
           */
          b_map.currentZoom = {
            'zoomLevel': map.zoomLevel(),
            'zoomLongitude': map.zoomLongitude(),
            'zoomLatitude': map.zoomLatitude()
          };

          /**
           * Zoom to initial position
           */
          map.zoomToLongLat(
            map.initialZoom.zoomLevel,
            map.initialZoom.zoomLongitude,
            map.initialZoom.zoomLatitude,
            true
          );
        },
        'afterCapture': function () {
          const c_map = this.setup.chart;
          setTimeout(function () {
            /**
             * Restore current zoom
             */
            map.zoomToLongLat(
              map.currentZoom.zoomLevel,
              map.currentZoom.zoomLongitude,
              map.currentZoom.zoomLatitude,
              true
            );
          }, 10);
        }
      }
    });
  }

  createCalendar() {
    // const Calendar = tui.Calendar;
    const calendar = new Calendar('#calendar', {
      defaultView: 'month',
      taskView: true,
      template: {
        monthGridHeader: function (model) {
          const date = new Date(model.date);
          const template = '<span class="tui-full-calendar-weekday-grid-date">' + date.getDate() + '</span>';
          return template;
        }
      }
    });
  }

  ngOnInit() {
    this.createChartAnalytics('bar');
    this.createChartMarketPlaces('doughnut');

    this.createWorldMap();
    this.createCalendar();
  }
}
