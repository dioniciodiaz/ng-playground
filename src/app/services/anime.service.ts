import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Anime, AnimeRequest } from '@models/anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  apiUrl = 'https://api.jikan.moe/v3/';

  constructor(private http: HttpClient) { }

  search(params: string): Observable<AnimeRequest> {
    return this.http.get<AnimeRequest>(`${this.apiUrl}search/anime?q=${params}`)
      .pipe(catchError(this.handleError));
  }

  getById(id: string): Observable<Anime> {
    return this.http.get<Anime>(`$${this.apiUrl}anime/${id}`)
      .pipe(catchError(this.handleError));
  }
  private handleError(res: HttpErrorResponse) {
    console.error(res.message);
    return observableThrowError(res.message || 'Server error');
  }
}
