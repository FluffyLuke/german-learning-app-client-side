import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, retry, throwError} from "rxjs";
import {Log} from "./log";

@Injectable({
  providedIn: 'root'
})
export class LogerService {

  constructor(private http: HttpClient) { }
  private handleError(error: HttpErrorResponse){
    if (error.status === 0){
      console.error('Error has occurred: ', error.message)
    } else {
      console.error(`Backend returned code ${error.status}`, error.error)
    }
    return throwError(() => new Error('Connecting to the backend was unsuccessful'))
  }

  getAllLogs(){
    return this.http.get<Log[]>('http://localhost:8090/log/get-all')
      .pipe(
        retry(3), catchError(this.handleError)
      )
  }

  getSomeLogs(numberOfLogs: number){
    return this.http.get<Log[]>(`http://localhost:8090/logs/get-some?number=${numberOfLogs}`)
      .pipe(
        retry(3), catchError(this.handleError)
      )
  }
}
