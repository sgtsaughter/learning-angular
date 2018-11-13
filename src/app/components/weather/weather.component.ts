import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Chart } from 'chart.js';
import * as moment from 'moment';



@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  chart = [];

  constructor(private weater: WeatherService) { }

  ngOnInit() {
    this.weater.dailyForecast()
    .subscribe(res => {
      res['list'] = res['list'].slice(1,9);
      let temp_max = res['list'].map(res => res.main.temp_max);
      let temp_min = res['list'].map(res => res.main.temp_min);
      let temp = res['list'].map(res => res.main.temp);
      let alldates = res['list'].map(res => res.dt_txt)

      console.log(res);
      console.log(alldates);
      
      let weatherDates = []
      alldates.forEach((res) => {
          weatherDates.push(moment(res).format('MMM Do YYYY, h:mm a'))
      })

      console.log(weatherDates);

      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: weatherDates,
          datasets: [
            { 
              data: temp,
              borderColor: "#3cba9f",
              fill: false
            },
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Date'
              }
            }],
            yAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Temperature'
              }
            }],
          },
          tooltips: {
            callbacks: {
              label: function(tooltipItems, data) { 
                return tooltipItems.yLabel + '°';
              }
            }
        },
          responsive: true
        }
      });
      
    });
  }

}
