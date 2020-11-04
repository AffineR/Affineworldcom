import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { GlobalDataSummary } from '../Class/global-data-summary'
import { DateWiseData } from '../Class/date-wise-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidServiceService {

  


  Total="https://disease.sh/v3/covid-19/all";

  BaseURL="https://corona.lmao.ninja/v2/countries";

  private globalDataUrl = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/04-17-2020.csv`;
  private dateWiseDataUrl = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv`
  constructor(private http: HttpClient) { }

  getDateWiseData() {
    return this.http.get(this.dateWiseDataUrl, { responseType: 'text' })
      .pipe(map(result => {
        let rows = result.split('\n');
        // console.log(rows);
        let mainData = {};
        let header = rows[0];
        let dates = header.split(/,(?=\S)/)
        dates.splice(0 , 4);
        rows.splice(0 , 1);
        rows.forEach(row=>{
          let cols = row.split(/,(?=\S)/)
          let con = cols[1];
          cols.splice(0 , 4);
          // console.log(con , cols);
          mainData[con] = [];
          cols.forEach((value , index)=>{
            let dw : DateWiseData = {
              cases : +value ,
              country : con , 
              date : new Date(Date.parse(dates[index])) 

            }
            mainData[con].push(dw)
          })
          
        })


        // console.log(mainData);
        return mainData;
      }))
  }


  getdatabyco():Observable<any>
  {
    return this.http.get(this.BaseURL);
  }

  getdatabydate():Observable<any>
  {
    return this.http.get(this.dateWiseDataUrl);
  }

  getalldate():Observable<any>
  {
    return this.http.get(this.Total);
  }

  getdatabycountry(input: any):Observable<any>
  {
    return this.http.get("https://disease.sh/v3/covid-19/countries/"+input+"?strict=true");
  }

  getallstate(input: any):Observable<any>
  {
    return this.http.get("https://disease.sh/v3/covid-19/gov/"+input);
  }

}
