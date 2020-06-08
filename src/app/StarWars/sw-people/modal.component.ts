import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { SwService } from '../sw.service';


@Component({
    selector: 'app-modal',
    template: `
    <div>
    <h3 mat-dialog-title>Confirm?</h3>
    <p> Are you sure you want to delete {{ name }}?</p>
        <button mat-button  mat-dialog-close cdkFocusInitial>Cancel</button>
        <button mat-button   [mat-dialog-close]="true">Delete</button>
    </div>
    `
})

export class ModalComponent implements OnInit {
    name: string;
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
        this.name = data.name;
    }
    ngOnInit() {
    }
}