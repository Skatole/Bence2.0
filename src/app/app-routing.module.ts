import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { FirstComponent } from './first/first.component';
import { AppComponent } from './app.component';
import { SettingComponent } from './Guards/setting/setting.component';
import { WorkerComponent } from './Guards/worker/worker.component';
import { ProfileComponent } from './Guards/profile/profile.component';
import { GuardComponent } from './Guards/guard/guard.component';
import { PermissionGuard } from './Guards/permission.guard';
import { SwPeopleComponent } from './StarWars/sw-people/sw-people.component';
import { SwPlanetsComponent } from './StarWars/sw-planets/sw-planets.component';
import { MenuComponent } from './StarWars/menu/menu.component';
import { YourResolver } from './StarWars/sw.resolver';


/* const routes: Routes = [
  {
    path: '',
    component: FirstComponent,
  },
  {
    path: 'pokemons',
    component: PokemonComponent
  }
]; */

/* const routes: Routes = [
  {
    path: '',
    component: GuardComponent
  },
  {
    path: 'setting',
    component: SettingComponent,
    canActivate: [PermissionGuard]
  },
  {
    path: 'worker',
    component: WorkerComponent,
    canActivate: [PermissionGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
] */

const routes: Routes =[
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'people',
    component: SwPeopleComponent,
    resolve: { people: YourResolver }
  },
  {
    path: 'planets',
    component: SwPlanetsComponent
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
