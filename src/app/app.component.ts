import {Component, OnInit} from '@angular/core';

import {
  aboutThePage,
  aboutThePageHeader,
  introduction,
  introductionHeader,
  someBackground, someBackgroundHeader
} from "../assets/MainViewContent";

@Component({
  selector: 'germanapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = "germanapp-cs"
}

