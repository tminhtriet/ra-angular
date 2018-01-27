import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class DashboardChartService {

  constructor(
    private http: Http
  ) { }

  dashboartChart1(month, year, carr){
    let header = new Headers();
    header.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:4000/dashboardChart/getBody', {"month": "3","year": "2017","airCode": "3S"}, 
              {headers: header}).map(res => res.json());
  }
}
