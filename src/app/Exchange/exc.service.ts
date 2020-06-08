import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExcService {

  constructor(private http: HttpClient) { }

  getExchanges() {
    return this.http.get(' https://api.exchangeratesapi.io/latest');
  }

  getSecondEx() {
    return this.http.get('https://api.exchangeratesapi.io/2010-01-12');
  }

  getSelectedExchange(val: string) {
    return this.http.get(`https://api.exchangeratesapi.io/latest?base=${val}`)
  }

  getCompare(first: string, second: string) {
    return this.http.get(`https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01&symbols=${first},${second}`);
  }


}
