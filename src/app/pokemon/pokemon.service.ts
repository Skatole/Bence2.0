import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  public fetchPokemons():Observable<any> {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/');
  }
  public getDogs() {
    return this.http.get('https://dog.ceo/api/breeds/image/random')
  }
}
