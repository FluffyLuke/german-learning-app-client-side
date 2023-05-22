import { Component } from '@angular/core';
import {appTitle} from "../app.module";

@Component({
  selector: 'germanapp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = appTitle
}
