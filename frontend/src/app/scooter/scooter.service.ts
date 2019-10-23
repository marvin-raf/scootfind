import { Injectable } from '@angular/core';
import { environment } from '@src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Scooter } from './scooter.interface';

@Injectable({
  providedIn: 'root'
})
export class ScooterService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Scooter[]>(`${environment.apiUrl}/api/scooters`);
  }
}
