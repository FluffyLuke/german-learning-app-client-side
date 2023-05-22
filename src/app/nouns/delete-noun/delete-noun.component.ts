import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {NounServiceService} from "../noun-service.service";
import {Router} from "@angular/router";
import {catchError, throwError} from "rxjs";

@Component({
  selector: 'germanapp-delete-noun',
  templateUrl: './delete-noun.component.html',
  styleUrls: ['./delete-noun.component.css','../../css/delete.css']
})
export class DeleteNounComponent implements OnInit{
  error: string | null = null;
  nounId: string;
  person: string;
  reactiveForm: FormGroup;

  ngOnInit(): void{
    this.reactiveForm = new FormGroup({
      id: new FormControl(this.nounId),
      person: new FormControl(this.person)
    })
  }
  constructor(private nounService: NounServiceService, private router: Router) {
    this.nounId = this.router.parseUrl(this.router.url).queryParams['id'];
    this.person = this.router.parseUrl(this.router.url).queryParams['person'];
  }

  delete(){
    this.nounService.deleteNoun(this.reactiveForm.get('id')?.value, this.reactiveForm.get('person')?.value).pipe(
      catchError(error => {
        this.error = error.error
        return throwError(error)
      })
    ).subscribe(() => {
      this.router.navigateByUrl("/nouns/display");
    })
  }
}
