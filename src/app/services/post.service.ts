import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Post } from '@models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  search(params: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}${params}`)
      .pipe(catchError(this.handleError));
  }

  getById(id: string): Observable<Post> {
    return this.http.get<Post>(`$${this.apiUrl}/${id}?_expand=user`)
      .pipe(catchError(this.handleError));
  }

  create(post: Post) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post<Post>(this.apiUrl, post)
      .pipe(catchError(this.handleError));
  }

  edit(post: Post) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put<Post>(`${this.apiUrl}/${post.id}`, post).pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.message);
    return observableThrowError(res.message || 'Server error');
  }
}
