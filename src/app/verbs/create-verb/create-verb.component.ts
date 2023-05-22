import {Component, OnInit} from '@angular/core';

import {Router} from "@angular/router";
import {Noun} from "../../nouns/noun";
import {catchError, throwError} from "rxjs";
import {VerbServiceService} from "../verb-service.service";
import {Verb} from "../verb";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'germanapp-create-verb',
  templateUrl: './create-verb.component.html',
  styleUrls: ['./create-verb.component.css', '../../css/create.css']
})
export class CreateVerbComponent implements OnInit{
  error: string | null = null;
  reactiveForm: FormGroup
  constructor(private verbService: VerbServiceService, private router: Router) {

  }

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      person: new FormControl(),
      verb: new FormControl(),
      translation: new FormControl(),
      perfect: new FormControl(),
      imperfect: new FormControl(),
    })
  }

  send(){
    console.log(this.reactiveForm.value);
    this.verbService.sendVerb(this.reactiveForm.value).pipe(
      catchError(error => {
        this.error = error.error
        return throwError(error)
      })
    ).subscribe(() => this.router.navigateByUrl("/verbs/display"))
  }
}
