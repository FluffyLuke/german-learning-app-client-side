import {Component, OnInit} from '@angular/core';
import {NounServiceService} from "../noun-service.service";
import { Router} from "@angular/router";
import {Noun} from "../noun";
import {catchError, throwError} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'germanapp-alter-noun',
  templateUrl: './alter-noun.component.html',
  styleUrls: ['./alter-noun.component.css','../../css/alter.css']
})
export class AlterNounComponent implements OnInit{
  error: string | null = null;
  noun: Noun;
  nounId: string;
  reactiveForm: FormGroup;

  ngOnInit(): void{
    this.reactiveForm = new FormGroup({
      id: new FormControl(),
      noun: new FormControl(),
      translation: new FormControl(),
      article: new FormControl(),
      person: new FormControl(),
    })

    this.nounId = this.router.parseUrl(this.router.url).queryParams['id']

    if(this.nounId != null){
      // @ts-ignore
      this.nounService.getNounById(this.nounId).subscribe(noun =>{
        this.noun = noun;
        this.reactiveForm.patchValue({
          id: this.noun.id,
          noun: this.noun.noun,
          translation: this.noun.translation,
          article: this.noun.article,
          person: this.noun.person,
        })
      })
    }
  }
  constructor(private nounService: NounServiceService, private router: Router) {
    this.noun = { id: "", noun: ""}
  }

  alter(){
     this.nounService.alterNoun(this.reactiveForm.value).pipe(
       catchError(error => {
      this.error = error.error
        return throwError(error)
     })
    ).subscribe(res => {
      this.router.navigateByUrl("/nouns/display");
      })
  }
}
