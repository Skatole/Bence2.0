import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.editable = false;
    this.showWarning = false;
    this.secondVisibility = true;
    this.firstVisibility = true;
  }

  first: number;
  second: number;
  sum: number;
  editable: boolean;
  item: string = '';
  items: string[] = [];
  showWarning: boolean;
  secondVisibility: boolean;
  firstVisibility: boolean;

  onAddTogether() {
    this.sum = this.first + this.second;
  }
  onAddArray() {
    if (this.item.length > 3 && this.item.length < 13) {
      this.items.push(this.item);
    }
    if (this.items.length >= 5) {
      this.showWarning = true;
    }
  }
  checkLength(): boolean {
    if (this.item.length > 3 && this.item.length < 13) {
      return true;
    }
    if (this.items.length === 5) {
      return false;
    }
    return false;
  }
  getValue(it: string) {
    this.items.push(it);
    this.showWarning = false;
  }
  navigateToPokemons() {
    this.router.navigate(['pokemons']);
  }

}
