import {Component, Injectable, OnInit} from '@angular/core';
import {NounServiceService} from "../noun-service.service";
import {Noun} from "../noun";
import {Router} from "@angular/router";

@Component({
  selector: 'germanapp-show-nouns',
  templateUrl: './show-nouns.component.html',
  styleUrls: ['./show-nouns.component.css','../../css/display.css']
})
export class ShowNounsComponent implements OnInit{
  nounList: Noun[];
  errorMessage: string;

  constructor(private nounService: NounServiceService, private router: Router) {
    this.errorMessage = ""
  }

  ngOnInit() {
    this.getNouns("10");
  }

  getNouns(amount: string){
    let numberOfNouns: number;
    numberOfNouns = parseInt(amount);
    if(isNaN(numberOfNouns)){
      this.errorMessage = "Enter a number!"
      return
    }
    this.errorMessage = "";
    this.nounService.getSomeNouns(numberOfNouns).subscribe(nouns =>{
      this.nounList = nouns;
    })
  }

  alter(index: number){
    this.router.navigateByUrl(`/nouns/alter?id=${this.nounList[index].id}&noun=${this.nounList[index].noun}&translation=${this.nounList[index].translation}&article=${this.nounList[index].article}`)
  }
  delete(index: number){
    this.router.navigateByUrl(`/nouns/delete?id=${this.nounList[index].id}&person=${this.nounList[index].person}`)
  }


}
