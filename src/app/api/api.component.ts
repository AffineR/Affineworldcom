import { Component, OnInit } from '@angular/core';
import { CovidServiceService } from '../Service/covid-service.service';
import { GlobalDataSummary } from '../Class/global-data-summary';
import { DateWiseData } from '../Class/date-wise-data';
import { merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { CheckCovidStatus } from "../Class/check-covid-status";
import { Chart } from "node_modules/chart.js";
import { CovidDate } from "../Class/covid-date";

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class APIComponent implements OnInit {

  covid=new CheckCovidStatus();

  alldata:any;

  searchstring:any;


  alldateswithcaes:string[]=[];
  
  worldcasess:any;

  cocntryrs:boolean;

  bycountrydata:any;

  covidwithdate=new CovidDate();

  chart = [];

  cases:[];

  constructor(private service : CovidServiceService) { }

  ngOnInit(): void {

    this.cocntryrs=false;

    this.service.getalldate().subscribe((Response)=>
    {
      // console.log(Response);
      this.worldcasess=Response;
    })
    
    this.service.getdatabyco().subscribe((Response)=>
    {
      this.alldata=Response;
      console.log(this.alldata);
    });


  }

  country(input)
  {
    console.log(input);
    this.service.getdatabycountry(input).subscribe((Response)=>
    {
      // console.log(Response);
      this.bycountrydata=Response;
      console.log(this.bycountrydata);
      this.cocntryrs=true;
      this.createchart(this.bycountrydata.cases,this.bycountrydata.active);
    });
  }


  createchart(cases,active)
  {
    // console.log(this.alldata.length);
    // for(let i=0;i<this.alldata.length;i++)
    // {
    //   this.cases=this.alldata[i];
    // }
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ['1','2','6'],
        datasets: [
          {
            data: [0,cases],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
    });
  }

}
