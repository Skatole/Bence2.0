import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-guard',
  templateUrl: './guard.component.html',
  styleUrls: ['./guard.component.css']
})
export class GuardComponent implements OnInit {
  selected: string;
  subscription$: Subscription[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.subscription$.push(this.userService.user.subscribe())
  
  }
  setUser() {
    this.selected = 'user';
    this.userService.user.next(this.selected);
    console.log(this.userService.user.getValue())
  }
  setAdmin() {
    this.selected = 'admin';
    this.userService.user.next(this.selected);
    console.log(this.userService.user.getValue())
  }


}
