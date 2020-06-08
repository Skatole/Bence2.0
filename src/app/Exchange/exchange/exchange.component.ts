import { Component, OnInit, ViewChild } from '@angular/core';
import { ExcService } from '../exc.service';
import { Subscription } from 'rxjs';
import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {
  data: any;
  data2: any;
  rates: any;
  rates2: any;
  base: string;
  base2: string;
  date: string;
  date2: string;
  toggleExchanges = false;
  selectedVal: string;
  selected: any;
  selectedBase: string;
  selectedDate: string;
  compares: any;
  subscription$: Subscription[] = [];
  error: string;
  uno: string;
  dos: string;

  constructor(private excService: ExcService) { }

first = '';
second = '';

  ngOnInit() {
    this.subscription$.push(this.excService.getExchanges().subscribe(data => {
      this.data = data;
      this.rates = this.data.rates;
      this.base = this.data.base;
      this.date = this.data.date;
    }))
    this.subscription$.push(this.excService.getSecondEx().subscribe(data => {
      this.data2 = data;
      this.base2 = this.data2.base;
      this.date2 = this.data2.date;
      this.rates2 = this.data2.rates;
    }))
  }
  getExchanges() {

    this.subscription$.push(this.excService.getSelectedExchange(this.selectedVal)
      .subscribe(res => {
        this.selected = res;
        this.selectedBase = this.selected.base;
        this.selectedDate = this.selected.date;
      }))
  }
  compare() {
    this.subscription$.push(this.excService.getCompare(this.first, this.second).subscribe(data => {
      this.compares = data;
      this.error = null;
    },
    (error:HttpErrorResponse) => {
      this.error = error.error.error;
    }))
  }

}
