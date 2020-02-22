import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from '@models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  search(params: string = ''): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}${params}`)
      .pipe(catchError(this.handleError));
  }

  getById(id: string, params: string = ''): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}${params}`)
      .pipe(catchError(this.handleError));
  }

  private create(user: User) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post<User>(this.apiUrl, user)
      .pipe(catchError(this.handleError));
  }
  save(user: User) {
    if (user.id) {
      return this.update(user);
    } else {
      return this.create(user);
    }
  }
  private update(user: User) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put<User>(`${this.apiUrl}/${user.id}`, user).pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.message);
    return observableThrowError(res.message || 'Server error');
  }
}
