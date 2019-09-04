import { Skater } from '../shared/skater';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SkaterService {
  constructor(private http: HttpClient) {}

  private skaterBaseUrl = 'http://127.0.0.1:3001/skaters/'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  addSkater(data): Observable<Skater> {
    return this.http.post<Skater>(this.skaterBaseUrl, JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  getSkaters(): Observable<Skater> {
    return this.http.get<Skater>(this.skaterBaseUrl)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  getSkater(id): Observable<Skater>{
    return this.http.get<Skater>(this.skaterBaseUrl + id)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  updateSkater(id, data): Observable<Skater> {
    return this.http.put<Skater>(this.skaterBaseUrl + id, JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  deleteSkater(id){
    return this.http.delete<Skater>(this.skaterBaseUrl + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }
  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
