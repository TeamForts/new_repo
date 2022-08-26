import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PersonInterface} from "../../main/interfaces/person.interface";

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit {

  @Output() close = new EventEmitter<PersonInterface | null>();

  constructor(

  ) { }

  ngOnInit(): void {
  }

}
