import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Verb} from "../verb";
import {VerbServiceService} from "../verb-service.service";

@Component({
  selector: 'germanapp-show-verbs',
  templateUrl: './show-verbs.component.html',
  styleUrls: ['./show-verbs.component.css', '../../css/display.css']
})
export class ShowVerbsComponent implements OnInit{
  verbList: Verb[];
  errorMessage: string;

  constructor(private verbService: VerbServiceService, private router: Router) {
    this.errorMessage = ""
  }

  ngOnInit() {
    this.getVerbs("10");
  }

  getVerbs(amount: string){
    let numberOfNouns: number;
    numberOfNouns = parseInt(amount);
    if(isNaN(numberOfNouns)){
      this.errorMessage = "Enter a number!"
      return
    }
    this.errorMessage = "";
    this.verbService.getSomeVerbs(numberOfNouns).subscribe(verbs =>{
      this.verbList = verbs;
    })
  }

  alter(index: number){
    this.router.navigateByUrl(
      `/verbs/alter?id=${this.verbList[index].id}&verb=${this.verbList[index].verb}&translation=${this.verbList[index].translation}&perfect=${this.verbList[index].perfect}&imperfect=${this.verbList[index].imperfect}&person=${this.verbList[index].person}`)
  }
  delete(index: number){
    this.router.navigateByUrl(`/verbs/delete?id=${this.verbList[index].id}&person=${this.verbList[index].person}`)
  }
}
