import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { People, SwService } from './sw.service';

@Injectable({ providedIn: 'root' })
export class YourResolver implements Resolve<People[]> {
constructor(private swService: SwService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<People[]> | Promise<People[]> | People[] {
        return this.swService.getPeople();
    }
}