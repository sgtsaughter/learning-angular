import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  dailyForecast() {
    return this.http.get("http://api.openweathermap.org/data/2.5/forecast?q=New+York&units=imperial&appid=9031729ffc62e16edc583fa262542166");
  }

}
