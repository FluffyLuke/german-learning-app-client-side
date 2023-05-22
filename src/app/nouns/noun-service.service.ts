import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Noun} from "./noun";


@Injectable({
  providedIn: 'root'
})
export class NounServiceService {
  constructor(private http: HttpClient) { }



  private handleError(error: HttpErrorResponse){
    if (error.status === 0){
      console.error('Error has occurred: ', error.message)
    } else {
      console.error(`Backend returned code ${error.status}`, error.error)
    }
    return throwError(() => new Error('Connecting to the backend was unsuccessful'))
  }

  getNouns(): Observable<Noun[]>{
    return this.http.get<Noun[]>('http://localhost:8090/noun/get-all')
      .pipe(
        retry(3), catchError(this.handleError)
      )
  }
  getNounById(id: string): Observable<Noun>{
    return this.http.get<Noun>(`http://localhost:8090/noun/get-one?id=${id}`)
  }

  getSomeNouns(numberOfNouns: number): Observable<Noun[]>{
    return this.http.get<Noun[]>(`http://localhost:8090/noun/get-some?number=${numberOfNouns}`)
      .pipe(
        retry(3), catchError(this.handleError)
      )
  }

  sendNoun(noun: Noun){
    return this.http.post(`http://localhost:8090/noun/post-one`,noun, {responseType: 'text', observe: 'response'})
  }
  alterNoun(noun: Noun){
    return this.http.put(`http://localhost:8090/noun/update-one`, noun, {responseType: 'text', observe: 'response'})
  }

  deleteNoun(nounId: string, person: string){
    return this.http.put(`http://localhost:8090/noun/delete-one?id=${nounId}&person=${person}`, null, {responseType: 'text', observe: 'response'})
  }

}
