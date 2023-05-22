import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Verb} from "./verb";

@Injectable({
  providedIn: 'root'
})
export class VerbServiceService {

  constructor(private http: HttpClient) { }



  private handleError(error: HttpErrorResponse){
    if (error.status === 0){
      console.error('Error has occurred: ', error.message)
    } else {
      console.error(`Backend returned code ${error.status}`, error.error)
    }
    return throwError(() => new Error('Connecting to the backend was unsuccessful'))
  }

  getVerbs(): Observable<Verb[]>{
    return this.http.get<Verb[]>('http://localhost:8090/verb/get-all')
      .pipe(
        retry(3), catchError(this.handleError)
      )
  }
  getVerbById(id: string): Observable<Verb>{
    return this.http.get<Verb>(`http://localhost:8090/verb/get-one?id=${id}`)
  }

  getSomeVerbs(numberOfVerbs: number): Observable<Verb[]>{
    return this.http.get<Verb[]>(`http://localhost:8090/verb/get-some?number=${numberOfVerbs}`)
      .pipe(
        retry(3), catchError(this.handleError)
      )
  }

  sendVerb(verb: Verb){
    return this.http.post(`http://localhost:8090/verb/post-one`,verb, {responseType: 'text', observe: 'response'})
  }
  alterVerb(verb: Verb){
    return this.http.put(`http://localhost:8090/verb/update-one`, verb, {responseType: 'text', observe: 'response'})
  }

  deleteVerb(verbId: string, person: string){
    return this.http.put(`http://localhost:8090/verb/delete-one?id=${verbId}&person=${person}`, null, {responseType: 'text', observe: 'response'})
  }
}
