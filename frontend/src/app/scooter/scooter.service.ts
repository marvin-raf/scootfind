import { Injectable } from '@angular/core';
import { environment } from '@src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Scooter } from './scooter.interface';

@Injectable({
  providedIn: 'root'
})
export class ScooterService {

  constructor(private http: HttpClient) { }

  getAll() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };
    return this.http.get<Scooter[]>(`${environment.apiUrl}/api/scooters?latitude=-43.50414198889369&longitude=172.61012022916051`, httpOptions);
  }
}
