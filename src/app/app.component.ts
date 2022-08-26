import {Component, OnDestroy, OnInit} from '@angular/core';
import {MainService} from "./main/services/main.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(
    public mainService: MainService,
  ) {

  }

  ngOnInit() {

  }

}
