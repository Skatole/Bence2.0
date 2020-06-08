import { Component, OnInit } from '@angular/core';
import { SwService, Planet } from '../sw.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ThemeService } from '../theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sw-planets',
  templateUrl: './sw-planets.component.html',
  styleUrls: ['./sw-planets.component.css']
})
export class SwPlanetsComponent implements OnInit {

  constructor(private swService: SwService, private themeService: ThemeService) { }


  id: number;
  planet: Planet;
  error: string;
  isDarkTheme: Observable<boolean>;
  clicked = false;
  picture: string;

  ngOnInit(): void {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }
  getPlanet() {
    this.swService.getPlanetByID(this.id).subscribe(p => {
      this.planet = p;
    },
    (error: HttpErrorResponse) => {
     this.error = error.error;
    })
    if (this.id !== 2) {
      this.picture = `../../../assets/${this.id}.png`
      
    } else {
      this.picture = `../../../assets/${this.id}.jpg`
    }
    
  }

  changeLight() {
    this.clicked = !this.clicked;
    this.themeService.setDarkTheme(this.clicked);
  }
  getNextPlanet() {
    this.id++;
    this.getPlanet();
  }
  getPreviousPlanet() {
    this.id--;
    this.getPlanet();
  }

}
