import {Component, OnInit} from '@angular/core';
import {
  aboutThePage,
  aboutThePageHeader,
  introductionHeader,
  someBackground,
  someBackgroundHeader,
  introduction
} from "../../assets/MainViewContent";
import {Log} from "../log";
import {LogerService} from "../loger.service";

@Component({
  selector: 'germanapp-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  currentContentHeader: string;
  currentContent: string;
  logs: Log[];

  ngOnInit(){
    this.loger.getSomeLogs(10).subscribe(logs => {
      this.logs = logs
    })
  }

  constructor(private loger: LogerService) {
    this.currentContentHeader = introductionHeader
    this.currentContent = introduction;
  }

  // DESCRIPTIONS
  introduction(){
    this.currentContentHeader = introductionHeader
    this.currentContent = introduction
  }

  about(){
    this.currentContentHeader = aboutThePageHeader
    this.currentContent = aboutThePage
  }

  background(){
    this.currentContentHeader = someBackgroundHeader
    this.currentContent = someBackground
  }

}
