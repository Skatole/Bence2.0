import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() array: string[];
  passText: string;
  @Output() emitter: EventEmitter<string> = new EventEmitter<string>();

  passValue() {
    this.emitter.emit(this.passText);
  }

}
