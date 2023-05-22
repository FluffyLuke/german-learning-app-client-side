import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {catchError, throwError} from "rxjs";
import {VerbServiceService} from "../verb-service.service";

@Component({
  selector: 'germanapp-delete-verb',
  templateUrl: './delete-verb.component.html',
  styleUrls: ['./delete-verb.component.css', '../../css/delete.css']
})
export class DeleteVerbComponent implements OnInit{
  error: string | null = null;
  verbId: string;
  person: string;
  reactiveForm: FormGroup;

  ngOnInit(): void{
    this.reactiveForm = new FormGroup({
      id: new FormControl(this.verbId),
      person: new FormControl(this.person)
    })
  }
  constructor(private verbService: VerbServiceService, private router: Router) {
    this.verbId = this.router.parseUrl(this.router.url).queryParams['id'];
    this.person = this.router.parseUrl(this.router.url).queryParams['person'];
  }

  delete(){
    this.verbService.deleteVerb(this.reactiveForm.get('id')?.value, this.reactiveForm.get("person")?.value).pipe(
      catchError(error => {
        this.error = error.error
        alert(error)
        return throwError(error)
      })
    ).subscribe(() => {
      this.router.navigateByUrl("/verbs/display");
    })
  }
}
