import { Component } from '@angular/core';
import {NounServiceService} from "../noun-service.service";
import {Noun} from "../noun";
import {Router} from "@angular/router";
import {catchError, throwError} from "rxjs";



@Component({
  selector: 'germanapp-create-noun',
  templateUrl: './create-noun.component.html',
  styleUrls: ['./create-noun.component.css','../../css/create.css']
})
export class CreateNounComponent {

  error: string | null = null;


  constructor(private nounService: NounServiceService, private router: Router) {

  }

  send(noun: Noun){
    this.nounService.sendNoun(noun).pipe(
      catchError(error => {
        this.error = error.error
        return throwError(error)
      })
    ).subscribe(() => this.router.navigateByUrl("/nouns/display"))
  }
}
