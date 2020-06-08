import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { MatTableModule } from '@angular/material/table';
import { ProfileComponent } from './Guards/profile/profile.component';
import { SettingComponent } from './Guards/setting/setting.component';
import { WorkerComponent } from './Guards/worker/worker.component';
import { GuardComponent } from './Guards/guard/guard.component';
import { ExchangeComponent } from './Exchange/exchange/exchange.component';
import { SwPeopleComponent } from './StarWars/sw-people/sw-people.component';
import { SwPlanetsComponent } from './StarWars/sw-planets/sw-planets.component';
import { MenuComponent } from './StarWars/menu/menu.component';
import { ModalComponent } from './StarWars/sw-people/modal.component';
import { BlueBackgroundDirective } from './StarWars/blue-background.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    PokemonComponent,
    ProfileComponent,
    SettingComponent,
    WorkerComponent,
    GuardComponent,
    ExchangeComponent,
    SwPeopleComponent,
    SwPlanetsComponent,
    MenuComponent,
    ModalComponent,
    BlueBackgroundDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
