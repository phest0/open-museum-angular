import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Museum } from '../models/museum/museum';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private httpClient: HttpClient) { }

  public fetchMuseums(): Observable<Museum[]> {
    // let usersObservable: Observable<any> = this.httpClient.get('http://localhost:3000/players');
    return this.httpClient.get<Museum[]>('http://localhost:3000/museums');
  }

  public fetchMuseumById(id: string): Observable<Museum> {
    return this.httpClient.get<Museum>('http://localhost:3000/museum/' + id);
  }
}