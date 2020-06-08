import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Router } from '@angular/router';
import { Subscription, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  subsription$: Subscription[] = [];
  message;



  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.subsription$.push(this.pokemonService.getDogs().subscribe(response => {
      this.message = response;
    },
    (error: HttpErrorResponse) => {
      return throwError(error)
    }))

  }
  navigateBack() {
    this.router.navigate(['..']);
  }

}

