import { Injectable } from '@angular/core';
import { RaceModel } from './models/race.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  constructor(private http: HttpClient) {}

  API_URL = 'https://ponyracer.ninja-squad.com/api/races';

  list(): Observable<RaceModel[]> {
    return this.http.get<RaceModel[]>(this.API_URL, { params: { status: 'PENDING' } });
  }
}
