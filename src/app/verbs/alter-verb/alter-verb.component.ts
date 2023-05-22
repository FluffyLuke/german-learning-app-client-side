import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {catchError, throwError} from "rxjs";
import {Verb} from "../verb";
import {VerbServiceService} from "../verb-service.service";

@Component({
  selector: 'germanapp-alter-verb',
  templateUrl: './alter-verb.component.html',
  styleUrls: ['./alter-verb.component.css', '../../css/alter.css']
})
export class AlterVerbComponent implements OnInit{
  error: string | null = null;
  verb: Verb;
  verbId: string;
  reactiveForm: FormGroup;

  ngOnInit(): void{
    this.reactiveForm = new FormGroup({
      id: new FormControl(),
      person: new FormControl(),
      verb: new FormControl(),
      translation: new FormControl(),
      perfect: new FormControl(),
      imperfect: new FormControl(),
    })

    this.verbId = this.router.parseUrl(this.router.url).queryParams['id']

    if(this.verbId != null){
      this.verbService.getVerbById(this.verbId).subscribe(verb =>{
        this.verb = verb;
        this.reactiveForm.patchValue({
          id: this.verb.id,
          verb: this.verb.verb,
          translation: this.verb.translation,
          person: this.verb.person,
          perfect: this.verb.perfect,
          imperfect: this.verb.imperfect
        })
      })
    }
  }
  constructor(private verbService: VerbServiceService, private router: Router) {
    this.verb = { id: "", verb: ""}
  }

  alter(){
    this.verbService.alterVerb(this.reactiveForm.value).pipe(
      catchError(error => {
        this.error = error.error
        return throwError(error)
      })
    ).subscribe(_ => {
      this.router.navigateByUrl("/verbs/display");
    })
  }
}
