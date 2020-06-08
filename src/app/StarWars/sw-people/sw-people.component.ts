import { Component, OnInit, Output } from '@angular/core';
import { People } from '../sw.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal.component';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-sw-people',
  templateUrl: './sw-people.component.html',
  styleUrls: ['./sw-people.component.css']
})
export class SwPeopleComponent implements OnInit {

  people: People[] = [];
  subscription$: Subscription[] = [];
  toDelete: string;

  constructor(private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.subscription$.push(this.route.data.subscribe(data => {
      this.people = data.people.results;
    }))
  }

  openDialog(item) {
    this.toDelete = item.name;
    const dialogRef = this.dialog.open(ModalComponent, { data: { name: item.name } });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.people.splice(this.people.findIndex(person => person.name === item.name), 1);
      }

    });

  }

}
